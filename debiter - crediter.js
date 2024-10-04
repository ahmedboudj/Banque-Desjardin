//amener la function debiter et lui donner une condition
function debiter() {
    solde = 25000;
    montant = parseFloat(document.form.montant.value);
    if (solde >= montant) {
        solde = solde - montant;
        document.form.resultat.value = solde;
    }
    //condition + affichage d'un message
    else if (solde < montant) {
        window.alert("désoler, votre solde est insuffisant !");
    }
    //affichage d'un message
    else {
        window.alert("Entrer le montant, svp !");
    }
}
//condition de créditer
function crediter() {
    solde = 25000;
    montant = parseFloat(document.form.montant.value);
    solde = solde + montant;
    document.form.resultat.value = solde;
}