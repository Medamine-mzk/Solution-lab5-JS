form=document.getElementById("myform");//annuler l'env d formulaire
form.addEventListener('submit', function(e){e.preventDefault();verif()});

function verif(){
    console.log("helloooooo");
}
function clickfn(){
    alert("btn clicked");
}