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
const user = document.querySelector('#user');

myForm.addEventListener('submit',onSubmit);
function onSubmit(e){
    e.preventDefault();
    if(name.value === '' || email.value === ''){
      msg.classList.add('error');
       msg.innerHTML = 'enter all fields';
       setTimeout(() => msg.remove(),3000);
    }else {
      const li = document.createElement('li');
      li.appendChild(document.createTextNode(`${name.value} : ${email.vale}`));
      users.appendChild(li);
      name.value = "";
      email.value = "";
    }
   
}








