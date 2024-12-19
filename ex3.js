form = document.getElementById("myform");      
form.addEventListener('submit', function (e) { e.preventDefault(); verif3(); })
function verif3(){
    
    //collect data from form
    lname=document.getElementById("lname").value;
    fname=document.getElementById("fname").value;
    daten=document.getElementById("daten").value;
    site=document.getElementById("site").value;
    code=document.getElementById("code").value;
    mail=document.getElementById("email").value;
    
    //required fields
    if  (lname==""){
        alert("le nom est obligatoire");
        return false;
    }
    if  (fname==""){
        alert("le prenom est obligatoire");
        return false;
    }
    if  (daten==""){
        alert("date naissance est obligatoire");
        return false;
    }
    //Le mot de passe doit être formé exactement de 8 caractères.
    if  (code.length!=8){
        alert("pass invalide => 8 caracteres");
        return false;
    }
    //Le choix d’un genre est obligatoire
    genre=document.getElementsByName("genre");
    if  (!genre[0].checked && genre[1].checked==false){
        alert("genre obligatoire !");
        return false;
    }
    //La sélection d’un pays est obligatoire
    pays=document.getElementById("pays");

    if  (pays.selectedIndex<1){
        alert("pays obligatoire !");
        return false;
    }
    // Au moins une formation est choisie
    forma=document.getElementsByName("forma");
    if  (!forma[0].checked && !forma[1].checked && !forma[2].checked){
        alert("formation obligatoire (min : 1)!");
        return false;
    }
    

    // L’envoie d’une image est obligatoire



 /*
 //methode 1
    // L’envoie d’une image est obligatoire
    file=document.getElementById("myfile").value; //png / bmp / png
    console.log(file);//c:/path/image.png
    let pos=file.lastIndexOf('.');
    ext1 = file.substring(pos+1);//+1 pour éliminer "."
    console.log(ext1);
    if (ext1 != "png" && ext1 != "bmp" && ext1 !="jpeg"){
        alert("image obligatoire !")
        return false;
    }
*/

  //methode 2  
   let p = file.lastIndexOf(".");
    let ext = file.substring(p+1);
    console.log(ext);//jpg png bmp

//images !! jpg png bmp ...
    if  (file==""){
        alert("fichier obligatoire !");
        return false;
    }
    //sol => string indexof
    mesExt="jpg png bmp"; //ext => pdf
    if (mesExt.indexOf(ext)==-1){
        alert("ext : jpg png bmp uniquement !");
        return false;
    }

    //sol 2 => array includes
    mesExt=["jpg", "png", "bmp"];
    if (!mesExt.includes(ext)){
        alert("ext : jpg png bmp uniquement !");
        return false;
    }


   
//...........................
    alert("Correct !");
    return true;
}


 //Lorsqu’une zone de texte ou textarea perd le focus la bordure prenne une 
    //couleur verte.



function myBlur(balise) {//this ---> balise
    console.log("-------- blur --------");
    balise.setAttribute("class","green");
    //console.log("balise.getAttribute :  "+balise.getAttribute("class"))
}

function myfocus(balise) {//pour tester le focus (input -> onfocus)
    console.log("focus work !");
    balise.setAttribute("class","data bgtest");
}
