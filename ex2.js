//https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/random
//https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
//https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil

form = document.getElementById("myform");      
form.addEventListener('submit', function (e) { e.preventDefault(); verif(); })

function verif() {
    //test taille vide/entier
    let dim=document.getElementById("dim").value;
    if (dim=="" || isNaN(dim)){
        alert("dim requried or must be number");
        return false;
    }
    //test max/min
    let max=document.getElementById("max").value;
    let min=document.getElementById("min").value;
    if (min=="" || max =="" || isNaN(min)|| isNaN(max)){
        alert("min & max requried");
        return false;
    }else{//min="9"    max="70"
        if(parseInt(min)>parseInt(max)){ 
            alert("min > max : error");
            return false;
        }
    }


//etape 1 : recherche : getElementById
//etape 2 : creation neud text
//etape 3 : appendChild

    table=document.getElementById("mytable");//recherche table
    //calcule "ROWS"
    rows=Math.ceil(parseInt(dim)/10);// nb des lignes 71/10 = 7.1 => 8
    k=0;
    j=0;
    //for(let j=0;j<rows;j++){
    do{
        tr=document.createElement("tr");//creation TR
        for (let i = 0; i < 10; i++) {
            //...........................
            td=document.createElement("td");//creation td
            if (k<parseInt(dim)){
                tn=document.createTextNode(getRandomInt(min,max)); //création node text
            }else{
                tn=document.createTextNode(" "); //création node text
            }
            //-------------------------------
            td.appendChild(tn);
            tr.appendChild(td);
            k++;
        }
        table.appendChild(tr);
        j++;
    }while(j<rows)


    return true;
}

function fnfocus(balise) {
    console.log("focus fn on => "+balise.id);
    balise.setAttribute("class","focusClass data");
}
function fnblur(balise) {
    console.log("blur fn on => "+balise.id);
    balise.setAttribute("class","data");
}

function getRandomInt(min, max) {
  min = Math.ceil(Number(min));
  max = Math.floor(Number(max)+1);
  return Math.floor(Math.random() * (max - min)) + min;
}
