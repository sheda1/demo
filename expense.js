
const submit = document.getElementById('submit');
static = 1
/*document.addEventListener("DOMContentLoaded", () => {
     //console.log('hjk');
     //console.log(localStorage.getItem('ExpenseMovie'));
   });*/
   //static i=1;
var keys = Object.keys(localStorage);

     i = keys.length;
     console.log('i'+i);
     console.log("keys", keys);
     let savedData , stringified;
     Object.keys(localStorage).forEach((key) => {
          console.log(key);
         
               stringified = localStorage.getItem(key);
               savedData = JSON.parse(stringified);
               console.log(savedData);
               addDetails(savedData);
         
        
     });

 submit.addEventListener('click',expense);
     function expense(e){
         
          e.preventDefault();
          const amount = document.getElementById('amount').value;
          const description = document.getElementById('description').value;
          const category = document.getElementById('category').value;
          

   //localStorage

   //let data = JSON.parse(localStorage.getItem('Expense')) || [];
    const data = {
      amt : amount,
      desp : description,
      cat : category, 
      

   };

  
     
    localStorage.setItem('Expense'+static++ ,JSON.stringify(data));
  

     addDetails(data);
} 
     
function addDetails(data){
     let ul = document.getElementById('list');
     let li = document.createElement('li');
     li.appendChild(document.createTextNode(data.amt + " " + data.cat + " "+data.desp));
     const edit = document.createElement("input");
     edit.id = "edit";
     edit.type = "button";
     edit.value = "Edit";
     edit.addEventListener("click", () => {
 
          document.getElementById("description").value = data.desp;
          document.getElementById("amount").value = data.amt;
          });
          li.appendChild(edit);

     const dlt = document.createElement("input");
          dlt.id = "Edit";
          dlt.type = "button";
          dlt.value = "Delete";
          dlt.addEventListener("click", () => {
      
          let dele = localStorage.keys;
          console.log(dele+'dele');
          console.log("hsjhsjqh"+localStorage.key(data));
          localStorage.removeItem(localStorage.key(data));
          li.remove();  
          });
          li.appendChild(dlt);
          document.getElementById('list').appendChild(li);
           
 }     
    
     // const form = document.getElementById('form');
     // const amount = document.getElementById('amount').value;
     // console.log(amount);
     // const category = form['category'];
     // const description = form['description'];
 
     // const data = JSON.parse(localStorage.getItem('Expense')) || [];
     // const addExpense = (amount , category , description) => {
     //      data.push({
     //           amount,
     //           category,
     //           description
     //      });
     //      localStorage.setItem('Expense',JSON.stringify(data));
     //      return {amount , category ,description};
     // };

     // const create = ({amount,category,description}) => {
     //      const ul = document.getElementById('list');
     //      const li = document.createElement('li');

     //      li.appendChild(document.createTextNode(amount+category+description));
     //      ul.appendChild(li);
     // };
     // data.forEach(create);


 
    

