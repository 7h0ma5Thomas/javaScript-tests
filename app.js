//Tableau contenant les éléments

let motos = [
    {
        "id": 1,
        "nom": "Ducati Panigale V4R",
        "prix": 39900,
        "categorie": "hypersport",
        "image": "images/panigale.jpg"
    },
    {
        "id": 2,
        "nom": "Honda CBR-RR 1000R SP",
        "prix": 26999,
        "categorie": "hypersport",
        "image": "images/cbr.jpg"
    },
    {
        "id": 3,
        "nom": "Yamaha R1 M",
        "prix": 22995,
        "categorie": "hypersport",
        "image": "images/r1.jpg"
    },
    {
        "id": 4,
        "nom": "Ducati Streetfighter V4",
        "prix": 19990,
        "categorie": "roadster",
        "image": "images/streetfighter.jpg"
    },
    {
        "id": 5,
        "nom": "Honda Hornet",
        "prix": "inconnu",
        "categorie": "roadster",
        "image": "images/hornet.jpg"
    },
    {
        "id": 6,
        "nom": "Yamaha MT10 SP",
        "prix": 18099,
        "categorie": "roadster",
        "image": "images/mt10.jpg"
    },
]

//Création d'une fiche

/*const panigale = motos [0];
const imageElement = document.createElement ("img");
imageElement.src = panigale.image;
const nomElement = document.createElement ("h3");
nomElement.innerText = panigale.nom;
const prixElement = document.createElement ("p");
prixElement.innerText = "prix: " + panigale.prix + "€";
const categorieElement = document.createElement ("p");
categorieElement.innerText = panigale.categorie;

const sectionFiches = document.querySelector (".fiches");
sectionFiches.appendChild (imageElement);
sectionFiches.appendChild (nomElement);
sectionFiches.appendChild (prixElement);
sectionFiches.appendChild (categorieElement);*/

//Création de toues les fiches

for (let i = 0; i < motos.length; i++) {
    const sectionFiches = document.querySelector (".fiches");

    const modeleElement = document.createElement ("article");

    const imageElement = document.createElement ("img");

    imageElement.src = motos[i].image;

    modeleElement.appendChild (imageElement);

    const nomElement = document.createElement ("h3");

    nomElement.innerText = motos[i].nom;

    modeleElement.appendChild (nomElement);

    const prixElement = document.createElement ("p");

    prixElement.innerText = motos[i].prix;

    modeleElement.appendChild (prixElement);

    const categorieElement = document.createElement ("p");

    categorieElement.innerText = motos[i].categorie;

    modeleElement.appendChild (categorieElement);

    sectionFiches.appendChild(modeleElement);
}