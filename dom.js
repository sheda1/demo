//console.dir(document);
/*console.log(document.domain);
console.log(document.URL);
console.log(document.title);
console.log(document.doctype);
console.log(document.body);
console.log(document.all);
console.log(document.all[10]);
//document.all[10].textcontent = 'Hello';
console.log(document.forms[0]);
console.log(document.links);*/
//console.log(document.getElementById('header-title');
/*var headerTitle = document.getElementById('header-title');
var header = document.getElementById('main-header');
console.log(headerTitle);*/
/*headerTitle.textContent = "hello";
headerTitle.innerText = "bye";*/
//headerTitle.innerHTML = '<h3>Hello<h3>';
//header.style.borderBottom = 'solid 3px #000';

/*var items = document.getElementsByClassName('list-group-item');
console.log(items);*/
/*
for(var i = 0; i< items.length; i++){
    items[i].style.color = "green";
    items[i].style.fontWeight = 'bold';
}*/

/*var li = document.getElementsByTagName('li');
console.log(li);
li[2].style.color = "green";

for(var i = 0; i< li.length; i++){
    
    li[i].style.fontWeight = 'bold';
}*/
/*var item= document.querySelector('.list-group-item:nth-child(2)');
item.style.background ="green";
var item1= document.querySelector('.list-group-item:nth-child(3)');
item1.style.display = 'none';*/
/*
//var titles = document.querySelectorAll('.title');
var odd = document.querySelectorAll('li:nth-child(odd)');
for (var i = 0 ; i < odd.length;i++){
    odd[i].style.background = 'yellow';
}
var seconditem = document.querySelectorAll('li')
seconditem[1].style.color = 'green';*/

/*var itemlist = document.querySelector('#items');
console.log(itemlist.parentNode);
itemlist.parentNode.style.backgroundColor = 'red';

console.log(itemlist.parentNode.parentNode.parentNode);*/

/*var itemlist = document.querySelector('#items');
console.log(itemlist.parentElement);
itemlist.parentElement.style.backgroundColor = 'red';

console.log(itemlist.parentElement);*/
var itemlist = document.querySelector('#items')
//console.log(itemlist.childNodes);
console.log(itemlist.children);
console.log(itemlist.children[1]);
console.log(itemlist.firstChild);
console.log(itemlist.firstElementChild);
console.log(itemlist.lastChild);
console.log(itemlist.lastElementChild);
console.log(itemlist.nextSibling);
console.log(itemlist.nextElementSibling);
console.log(itemlist.previousSibling);
console.log(itemlist.previousElementSibling);


var newDiv = document.createElement('div');
newDiv.className = 'hello';
newDiv.id = 'hello1';
newDiv.setAttribute('title','HELLP DOV');
var newDivText = document.createTextNode('Hello World');
newDiv.append(newDivText);
console.log(newDiv);

var cont = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
cont.insertBefore(newDiv,h1);

var cont1 = document.querySelector('.list-group-item');

cont1.insertBefore(newDiv,cont1[0]);













