var divMare=document.getElementById('ceas');
divMare.className="card d-flex flex-row flex-wrap";

fetch("http://localhost:3000/api/watches",
    {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + sessionStorage.getItem('token')
        }
    })
    .then((response) => response.json())
    .then((response) => {
    var ceasuri=response;
    console.log(ceasuri);
        ceasuri.forEach(function(ceas){
            var div=document.createElement('div');
            div.className="card-body";
            
            var img=document.createElement('img');
            img.className="card-img";
            img.src=ceas.image;

            var p=document.createElement('p');
            p.className="card-text";
           
            p.innerHTML=`${ceas.id} :<br> ${ceas.name} <br>${ceas.price}`;
           
            div.appendChild(img);
            div.appendChild(p);
            divMare.appendChild(div);


        });
        console.log(divMare);
        
    });