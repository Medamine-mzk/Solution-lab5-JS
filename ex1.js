form=document.getElementById("myform");//annuler l'env d formulaire
form.addEventListener('submit', function(e){e.preventDefault();verif()});



function verif(){

//------------- vérification non vide -----------------------------------------------------
    //verification nonvide : nom & prenom
    //queryselector // queryseletorall // getelementbyid // getelementsbyname
    let nomp = document.getElementById("name").value;
    if (nomp == "") {
        alert("NOM et PRENOM invalide ! : => required");
        return false;
    }

    //verification nonvide : CIN
    let cin = document.getElementById("cin").value;
    if (cin == "") {
        alert("CIN invalide ! : => required");
        return false;
    }

    //verification nonvide : email
    let mail = document.getElementById("mail").value;
    if (mail == "") {
        alert("mail invalide ! : => required");
        return false;
    }

//------------- vérification MAJ -----------------------------------------------------
    //part 1 !
    let nompArray=nomp.split(" ");
    //nomp ==> "farah hello adem manel"
     prenom= nompArray[0];
    // prenom ?
     if (prenom != prenom.toUpperCase() ) {
        alert("Prenom invalide ! : => MAJ");
        return false;
    }
    //part 2 !
    // nompArray: [farah  , hello , adem , manel]
    // nompArray[3]
        nompArray.forEach(ch => {
            //******************* */
            if (ch[0] != ch[0].toUpperCase()){ // !(ch[0]>="A" && ch[0]<="Z")
                alert("Nom invalide ! : => MAJ au debut");
                return false;
            }
        });


//************✓ Le champ CIN ne contient que 8 chiffres de 0 à 9.------------------- */

        if ((cin.length != 8) ||  (isNaN(cin)) || ( cin.indexOf(".") >-1 )){
            alert("cin invalide ! ---> 8 chiffres");
            return false;
        }

//------ L’adresse e-mail, doit comporter le caractère arobase (@) et un point (.). //mail@gmail.com

        if (mail.indexOf("@")<0 || mail.indexOf(".")==-1 || mail.indexOf("@")>mail.lastIndexOf(".")){
            alert("adresse email est invalide");
            return false;
        }

//------- On peut choisir au maximum deux modules de formation

        //methode 2

        modules=document.getElementById("forma");
      
        let count=0;
        for (let i = 0; i < modules.options.length; i++){
            if ( modules.options[i].selected ) count++; 
        }
        if (count>2){
            alert("max 2 modules");
            return false;
        }
        //count++ ????????




        if (numberselected>2){
            alert("max 2 modules");
            return false;
        }
   



    return true;

}

//methode 2 : onchange
var count;
function countSelected(){
        x=document.getElementById("forma");
        count=0;//initialisation RAZ
        for (let i = 0; i < x.options.length; i++){
            if ( x.options[i].selected ) count++; 
        }

        //console.log(numberselected);
}



















/*function verif(){

    //vérification des élements "required"
    let name=document.getElementById("name").value;
    let cin=document.getElementById("cin").value;
    let mail=document.getElementById("mail").value;

    if (name=="" || cin==""|| mail==""){
        alert("nom, cin et adresse email doivent etre non vides");
        return false;
    }

    //vérification Maj
    const myArray = name.split(" ");
    //verif prenom
    let p=myArray[0];
    let testp=p.toUpperCase();
    if (p!=testp){
        alert("Prénom n'est pas en majus)");
        return false;
    }
    myArray.forEach(element => {
        if (element[0]>="a" && element[0]<="z"){
            alert("Prénom et nom sont invalides (Min au debut)");
            return false;
        }
    });

    //verif cin
    if (cin.length != 8 || isNaN(cin)){
        alert("num CIN est invalide");
        return false;
    }

    //verif mail
    if (mail.indexOf("@")<0 || mail.indexOf(".")==-1){
        alert("adresse email est invalide");
        return false;
    }

    //verif modules formation : max 3
    modules=document.getElementById("forma");
    let count=0;
    for (let index = 0; index < modules.options.length; index++){
        if ( modules.options[index].selected === true ) count++; 
    }

    if (count>2){
        alert("Nombre des formations max est 2");
        return false;
    }
    //formulaire valide
    alert("Formulaire Valide !");
}*/