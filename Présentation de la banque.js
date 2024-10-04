//on  la fonction changeImage dans JS
function changeImage() {
    //On raméne l'image (img1)
    let image = document.getElementById('img1')
    //pour faire la rotation des 5 images
    if (image.src.match('img1.png')) {
        image.src = 'img2.png'
        
    } 
    else if (image.src.match('img2.png')) {
        image.src = 'img3.jpg'
        
    } 
    else if (image.src.match('img3.jpg')) {
        image.src = 'img4.jpg'
        
    } 
    else if (image.src.match('img4.jpg')) {
        image.src = 'img5.jpg'
        
    } 
    else if (image.src.match('img5.jpg')) {
        image.src = 'img1.png'
        
    }
    else {
    image.src = 'img1.png' 
    }
}
//on raméne la fonction changeCouleur dans JS
function changeCouleur() {
    //changement de couleur pour les 5 titres
    document.getElementById("titre1").style.color = "red";
    //changement de couleur pour les 5 paragraphes 
    document.getElementById("p1").style.color = "blue";

    document.getElementById("titre2").style.color = "green";

    document.getElementById("p2").style.color = "brown";

    document.getElementById("titre3").style.color = "pink";

    document.getElementById("p3").style.color = "yellow";

    document.getElementById("titre4").style.color = "brown";

    document.getElementById("p4").style.color = "green";

    document.getElementById("titre5").style.color = "blue";

    document.getElementById("p5").style.color = "red";

    document.getElementById("titre6").style.color = "yellow";

    document.getElementById("p6").style.color = "pink";

}