//déclaration des labels du formulaire
function envoyer(){
    var nom = document.forms["inscription"]["Nom"];
    var prenom = document.forms["inscription"]["Prénom"];
    var Adresse = document.forms["inscription"]["Adresse"];
    var Tel = document.forms["inscription"]["Tel"];
    var email = document.forms["inscription"]["email"];
    var Motdepasse = document.forms["inscription"]["Mot de passe"];
    var Confirmationdumotdepasse = document.forms["inscription"]["Confirmation du mot de passe"];
    let myRegex = /^[a-zA-Z-\s]+$/;
    //condition pour le nom
    if (nom.value == "") {
        window.alert("Veuillez remplir le champ Nom, Svp !");
        nom.focus();
        return false;
    }
    //condition d'entrer que des lettres
    else if (myRegex.test(nom.value) == false){
        window.alert("Le champ nom accepte que des lettres !");
        return true;
    }
    //condition pour le prénom et d'afficher un message
    if (prenom.value == "") {
        window.alert("Veuillez remplir le champ prenom, svp ! ");
        prenom.focus();
        return false;
    }
    //condition d'entrer que des lettres et d'afficher un message
    else if (myRegex.test(prenom.value) == false){
        window.alert("Le champ prénom accepte que des lettres !");
        return true;
    }
    //condition pour le champ adresse et d'afficher un message
    if (Adresse.value == "") {
        window.alert("Veuillez saisir le champ Adresse, Svp !");
        Adresse.focus();
        return false;
    }
    //condition de remplir le champ tel et d'afficher un message
    if (Tel.value == "") {
        window.alert("Veuillez saisir le champ Tel, Svp !");
        Tel.focus();
        return false;
    }
    //condition de remplir le champ email et d'afficher un message
    if (email.value==""){
        window.alert("Veuillez saisir le champ email");
        email.focus();
        return false;
      }
    //condition d'insérer un @ et d'afficher un message
      if(email.value.indexOf("@", 0)<0){
          window.alert("Veuillez insérer un symbole ( @ ) à votre courriel ");
          email.focus();
          return false;
      }
      //condition d'insérer un . et d'afficher un message
      if (email.value.indexOf(".", 0)<0){
          window.alert("Veuillez insérer ( . ) à votre courriel ");
          email.focus();
          return false;
    }
    //condition de remplir le champ mot de passe et d'afficher un message
    if (Motdepasse.value == "") {
        window.alert("Veuillez saisir le champ Mot de passe, Svp !");
        Motdepasse.focus();
        return false;
    }
    if (Confirmationdumotdepasse.value == "") {
        window.alert("Veuillez Confirmer votre mot de passe, Svp !");
        Confirmationdumotdepasse.focus();
        return false;
    }
    //condition de cocher au moin une radio et d'afficher un message
    if ((document.inscription.masculin.checked)||(document.inscription.féminin.checked)) {
    }
    else {
        window.alert("vous devez cocher au moins une casse");
        (document.inscription.masculin.checked).focus();
        (document.inscription.féminin.checked).focus();
    }
    window.alert("Le formulaire à été enregistré et soumis au serveur avec succès")
}
