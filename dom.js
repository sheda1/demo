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
console.log(items);

for(var i = 0; i< items.length; i++){
    items[i].style.color = "green";
    items[i].style.fontWeight = 'bold';
}*/

var li = document.getElementsByTagName('li');
console.log(li);
li[2].style.color = "green";

for(var i = 0; i< li.length; i++){
    
    li[i].style.fontWeight = 'bold';
}








