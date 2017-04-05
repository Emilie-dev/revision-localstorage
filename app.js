$(document).ready(function(){

// Exercice 1: je test le localStorage

	var valeur = "";  // J'initialise une variable valeur de type texte.



	$("#action").click(function() {
		var valeur = $("#content").val(); // Je créais un bouton (fonction click) pour que la
										  // variable valeur récupére le contenu de l'input id="content"
//console.log(valeur);

		var enregistrer = localStorage.setItem('revision', JSON.stringify(valeur)); // Je créais une variable enregistrer
		console.log(enregistrer);												   // et j'initialise localstorage, qui fait 
																				  // un objet clé:valeur(valeur=saisie de l'input).
	});



	function recupere() {  // Je créais une fonction pour récupérer ma sauvegarde.
		var chercher = localStorage.getItem('revision');  // J'initialise une variable chercher pour
														 // récupérer mes sauvegardes. Je prends la valeur de l'objet (clé:valeur) créait avec enregistrer.
		if (chercher != null) {
			valeur = JSON.parse(chercher); // j'écris une condition: si ma variable cherhcer n'est pas nulle(=vide/n'a pas de valeur), je récupérer la valeur de mon objet.
		}
		console.log(valeur);
	}


	recupere(); // J'appel la fonction recupere.

});


