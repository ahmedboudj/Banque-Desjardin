//modifier la couleur du background + la couleur du titre 
function maFunction() {
    var titre = document.querySelector("#montitre");
    titre.style.backgroundColor = "rgb(40,140,90)";
    titre.style.color = "white";
}
//changer la police de mes paragraphes
const polices = ["Courier New", "comic sans ms"];
let index = 0;
function changepolice() {
    var pars = document.getElementsByTagName("p");
    for (var i = 0; i < pars.length; i++) {
        pars[i].style.fontFamily = polices[index];
    }

}
