alert("Salut !");

[
    {
        "nom": Ducati,
        "prix": 28000,
        "catégorie": hypersport,
        "image": ""
    },
    {
        "nom": ,
        "prix": ,
        "catégorie": ,
        "image": 
    },
    {
        "nom": ,
        "prix": ,
        "catégorie": ,
        "image": 
    },
    {
        "nom": ,
        "prix": ,
        "catégorie": ,
        "image": 
    },
    {
        "nom": ,
        "prix": ,
        "catégorie": ,
        "image": 
    },
    {
        "nom": ,
        "prix": ,
        "catégorie": ,
        "image": 
    },
]

const ducati = moto [0];
const imageElement = document.createElement ("img");
imageElement.src = ducati.image;
const nomElement = document.createElement ("h3");
nomElement.innerText = ducati.nom;
const prixElement = document.createElement ("p");
prixElement.src = ducati.prix;
const categorieElement = document.createElement ("p");
categorieElement.src = ducati.categorie;

const sectionFiches = document.querySelector (".fiches");
sectionFiches.appendChild (imageElement);
sectionFiches.appendChild (nomElement);
sectionFiches.appendChild (prixElement);
sectionFiches.appendChild (categorieElement);



/*for (let i = 0; i < toutesLesMotos.length, i ++) {
    const sectionFiches = document.querySelector (".fiches");

    const moto = document.querySelector ("article");

    const photoMoto = document.querySelector ("img");

    imageMoto.src = toutesLesMotos [i].image;

    moto.appendChild (imageMoto);

    document.body.appendChild (moto);
}*/