
var form = document.getElementById("my-form");


form.addEventListener('submit',localst);

function localst(e){
    e.preventDefault();
   
    var username = document.getElementById('name').value;
    var useremail = document.getElementById('email').value;
  
   let myObj =JSON.parse(localStorage.getItem('userData')) || [];
   let exist = myObj.length && JSON.parse(localStorage.getItem('userData')).some(data => data.email.toLowerCase() == document.getElementById('email').value.toLowerCase());
   if (!exist){
    myObj.push({
        name : username,
        email : useremail
    });
   localStorage.setItem('userData',JSON.stringify(myObj));
   display();
     document.querySelector('my-form').reset();
     document.getElementById('name').focus();

   }else{
     localStorage.removeItem(document.getElementById('email'));
     alert('duplicate email');
   }

}
 
function display(){
    
   
    if(localStorage.getItem('userData')){
        var output = document.getElementById('output');
            output.innerHTML = "";
       
 JSON.parse(localStorage.getItem('userData')).forEach(data => {
         
        output.innerHTML +=`
    <ul>
        <li>${data.name}&nbsp${data.email}<input type="button" id='edit' value="Edit" onclick="edit()"></input><input type="button" id='delete' value="Delete" onclick="deleteuser()"></input></li>
    </ul>
    
    `;
  
});

    }
}

function edit(){
    document.getElementById('name').focus();
}
function deleteuser(){
    localStorage.removeItem('userData');
li.remove();
   
}

 

