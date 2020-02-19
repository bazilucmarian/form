var email=document.getElementById('email');
var pass=document.getElementById('password');
var button=document.querySelector('button');
button.addEventListener('click', logare);

function logare(e){
    e.preventDefault();
   
    var body={
        email:email, 
        password: pass
    };
    JSON.stringify(body);
    fetch("http://localhost:3000/api/auth/login", {
        method: 'POST',
        body
    })
    .then((response)=>response.json())
    .then((response)=>{
        sessionStorage.setItem("token", response.token);
        window.location.assign('watches.html');

        console.log(response.token);

    })

}

