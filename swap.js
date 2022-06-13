/*let a = 10;
let b = 5;
 a = a + b;
 b = a - b;
 a = a - b;
 console.log(a,b);*/
 
/*console.log(document.getElementById('my-form'));
  
console.log(document.querySelector('h1'));
console.log(document.querySelectorAll('.item'));
console.log(document.getElementsByClassName('item'));
console.log(document.getElementsByTagName('li'));*/

/*const ul = document.querySelector('.items');
//ul.lastElementChild.remove();
ul.firstElementChild.textContent = 'Hello';
ul.firstElementChild.style.color = 'green';
ul.children[1].style.color = 'yellow';/*/

/*const btn = document.querySelector('.btn');
btn.addEventListener('click',(e) =>{
  e.preventDefault();
  console.log('click');
});
const btn1 = document.querySelector('.btn');
btn1.addEventListener('mouseover',(b)=>{
  console.log('mouseover');
});
const btn2 = document.querySelector('.btn');
btn2.addEventListener('mouseout',(b)=>{
  console.log('mouseout');
});*/
const myForm = document.querySelector('#my-form');
const name = document.querySelector('#name');

const email = document.querySelector('#email');
const msg = document.querySelector('.msg');
const users = document.querySelector('#users');

myForm.addEventListener('submit',onSubmit);

window.addEventListener("DOMContentLoaded",() =>{
  axios.get("https://crudcrud.com/api/6b90a602889b499685c7f944a33dc35c/appointmentdata")
  .then((response) =>{
    console.log(response.data);
    for( var i = 0; i < response.data.length; i++){
/*
      const li = document.createElement('li');
      console.log(response.data[i] + i);
      li.appendChild(document.createTextNode(response.data[i].name1 + " " + response.data[i].email1));
     //li.appendChild(document.body.innerHTML(`<button>Delete</button>`)); //document.body.innerHTML = '
    users.appendChild(li);
    */
   const parentNode = document.getElementById('users');
   const childHTML = `<li> ${response.data[i].name1}   ${response.data[i].email1}
                      <button onClick = deleteUser(${response.data[i]._id})> DeleteUser </button>
                      <button onClick = EditUser(${response.data[i]})> Edit </button>
                      </li>`
     parentNode.innerHTML = parentNode.innerHTML + childHTML;                 

    }
  })
  .catch((err) => {
    document.body.innerHTML = document.body.innerHTML + '<h4> something went wrong</h4>';
  })
  
})
function removeUserFromScreen(userId){
  const parentNode = document.getElementById('users');
  const childDelete = document.getElementById(userId);
  if (childDelete){
    parentNode.removeChild(childDelete);
  }
}
function deleteUser(userId){
   console.log(userId);
   axios.deleteUser(`https://crudcrud.com/api/6b90a602889b499685c7f944a33dc35c/appointmentdata/${userId}`) 
   .then((response) =>{
        removeUserFromScreen(userId);
   }).catch((err) => {
    document.body.innerHTML = document.body.innerHTML + '<h4> something went wrong</h4>'
   })

}

function onSubmit(e){
    e.preventDefault();
    const name1 = name.value;
    console.log(name.value);
    const email1 = email.value;
    const obj = {
      name1,
      email1
    }
    axios.post("https://crudcrud.com/api/6b90a602889b499685c7f944a33dc35c/appointmentdata",obj)
    .then((response) => {
      console.log(response)
    })
    .catch((err) => {
      document.body.innerHTML = document.body.innerHTML + '<h4> something went wrong</h4>'
    });/*
    if(name.value === '' || email.value === ''){
      msg.classList.add('error');
       msg.innerHTML = 'enter all fields';
       setTimeout(() => msg.remove(),3000);
    }else {
      const li = document.createElement('li');
      li.appendChild(document.createTextNode(`${name.value} : ${email.value}`));
      users.appendChild(li);
      name.value = "";
      email.value = "";
    }
*/
  }
  

 






