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

function onSubmit(e){
    e.preventDefault();
    const name1 = name.value;
    console.log(name.value);
    const email1 = email.value;
    const obj = {
      name1,
      email1
    }
    axios.post("https://crudcrud.com/api/0ccc167de3f54db0bc1ef74dd92dc823/appointmentData",obj)
    .then((response) => {
      console.log(response)
    })
    .catch((err) => {
      document.body.innerHTML = document.body.innerHTML + '<h4> something went wrong</h4>'
    });
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
    
  }
  

 






