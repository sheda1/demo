
var form = document.getElementById("my-form");
form.addEventListener('submit',localst);
function localst(e){
    e.preventDefault();
    var username = document.getElementById('name').value;
    var useremail = document.getElementById('email').value;
  
   let myObj ={
       name : username,
       email : useremail
   };
  
  let myObj_serialized = JSON.stringify(myObj);
  

   localStorage.setItem("user", myObj_serialized);
   console.log(localStorage);

   let myObj_deserialized = JSON.parse(localStorage.getItem("myObj"));
   console.log(myObj_deserialized)




}


