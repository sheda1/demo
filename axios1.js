const myForm = document.querySelector('#my-form');
const name = document.querySelector('#name');

const email = document.querySelector('#email');
const msg = document.querySelector('.msg');
const users = document.querySelector('#users');

myForm.addEventListener('submit',onSubmit);

function onSubmit(e){
    e.preventDefault();
    const name1 = name.value;
    console.log(name.value);
    console.log('onsubmit')
    const email1 = email.value;
    const obj = {
      name1,
      email1
    }
    axios.post("https://crudcrud.com/api/988e83ec1d9147dba16f6dc6a58fdc72/appointmentdata",obj)
    .then((response) => {
      console.log(response);
      console.log('post');
      name.value = "";
      email.value = "";
    })
    .catch((err) => {
      document.body.innerHTML = document.body.innerHTML + '<h4> something went wrong while post request</h4>'
    });
    /*
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
  
window.addEventListener("DOMContentLoaded",() =>{
    axios.get("https://crudcrud.com/api/988e83ec1d9147dba16f6dc6a58fdc72/appointmentdata")
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
     const id = response.data[i]._id;
     const childHTML = `<li> ${response.data[i].name1}   ${response.data[i].email1}
     
                       <button onClick = deleteUser('${response.data[i]._id}') > Delete </button> &nbsp&nbsp
                       
                        <button onClick = EditUser('${response.data[i].name1}','${response.data[i].email1}') > Edit </button>
                        </li>`
       parentNode.innerHTML = parentNode.innerHTML + childHTML;                 
  
      }
    })
    .catch((err) => {
      document.body.innerHTML = document.body.innerHTML + '<h4> No data</h4>';
    })
    
  })
  function deleteUser(userId){
    console.log(userId);
    axios.delete(`https://crudcrud.com/api/988e83ec1d9147dba16f6dc6a58fdc72/appointmentdata/${userId}`) 
    .then((response) =>{
        console.log('hie');
         removeUserFromScreen(userId);
    }).catch((err) => {
     document.body.innerHTML = document.body.innerHTML + '<h4> something went wrong while deleting</h4>'
    })
 
 }
 function removeUserFromScreen(userId){
   const parentNode = document.getElementById('users');
   const childDelete = document.getElementsById();
   if (childDelete){
     parentNode.removeChild(childDelete);
   }
 }

 function EditUser(name1,email1){
    name.value = name1;
    email.value = email1;
   
myForm.addEventListener('submit',editsubmit);
  
 }

   function editsubmit(name,email){

    console.log('edit submit');
    axios.put("https://crudcrud.com/api/988e83ec1d9147dba16f6dc6a58fdc72/appointmentdata",{
        name1 : name,
        email1 : email
    })
   }