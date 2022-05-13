
var form = document.getElementById("my-form");

form.addEventListener('submit',localst);

function localst(e){
    e.preventDefault();
    var username = document.getElementById('name').value;
    var useremail = document.getElementById('email').value;
  
   let myObj =JSON.parse(localStorage.getItem('userData')) || [];
   myObj.push({
       name : username,
       email : useremail
   });
  localStorage.setItem('userData',JSON.stringify(myObj));
  display();
    document.getElementById('my-form').reset;
    document.getElementById('name').focus();


}
  
function display(){
   
    if(localStorage.getItem('userData')){
        var output = document.getElementsById('output');
            output.innerHTML = "";
       
 JSON.parse(localStorage.getItem('userData')).forEach(data => {
         
        output.innerHTML +=`
    <ul>
        <li>${data.name}&nbsp${data.email}</li>
    </ul>`;
});

    }
}

 

