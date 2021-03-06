

/* 1/Écrire la fonction JavaScript showHxContent permettant d'afficher le contenu du div
 correspondant au titre sur lequel on clique.*/ 
function showHxContent (pNumber) {
	vDiv = document.getElementById("title" + pNumber);
    vDiv.style.display = "block";
}
/*
 2) Écrire la fonction JavaScript hideAllDivs permettant de masquer le contenu de tous les div
  du document.
 */
function hideAllDivs () { 
	vDivs = document.getElementsByTagName("div");
	for (var i=0; i<vDivs.length; i++) {
		vDivs.item(i).style.display = "none";
	}
}
/**
 * 3) Écrire la fonction alertTitle permettant d'afficher (avec la fonction JavaScript alert) 
 * le contenu du énième titre, défini par le champ de saisie title.
 */
function alertTitle () {
	vHx = document.getElementsByTagName("h1");
	vIndice = document.getElementById("title").value;
	vIndice = vIndice - 1;
	alert(vHx.item(vIndice).firstChild.data);
}

/*
4) Écrire la fonction deleteTitle permettant d'effacer le contenu du titre défini par le champ title.
 (suppression du nœud fils de type texte)
 */
document.querySelector('#masquer').addEventListener('input',function deleteTitle(){
	vHx = document.getElementsByTagName("h1");
	vIndice = document.getElementById("title").value;
	vIndice = vIndice - 1;
	alert (vHx.item(vIndice).removeChild(vHx.item(vIndice).firstChild));

})

/*5) Écrire la fonction defineTitle permettant d'affecter le contenu du titre défini par le champ 
title avec la valeur "Nouveau titre". On testera que 
le titre a ou non déjà une valeur (nœud texte) avant l'ajout, afin de la supprimer si besoin.*/ 

function defineTitle () {

	vHx = document.getElementsByTagName("h1");
	vIndice = document.getElementById("title").value;
	vText = document.createTextNode('Nouveau titre');
	vIndice = vIndice - 1;
	if (vHx.item(vIndice).hasChildNodes()) {
	
		vHx.item(vIndice).removeChild(vHx.item(vIndice).firstChild);
	}
	vHx.item(vIndice).appendChild(vText);
}