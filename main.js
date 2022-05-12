

function my(){
    var username = document.getElementById('name').value;
    var useremail = document.getElementById('email').value;
    console.log(useremail);



localStorage.setItem('name',username);
localStorage.setItem('email',useremail);



}


