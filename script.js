let team = [
    {
        nome: "Wayne Barnett",
        ruolo: "Founder & CEO",
        immagine: "wayne-barnett-founder-ceo.jpg"
    },
    {
        nome: "Angela Caroll",
        ruolo: "Chief Editor",
        immagine: "angela-caroll-chief-editor.jpg"
    },
    {
        nome: "Walter Gordon",
        ruolo: "Office Manager",
        immagine: "walter-gordon-office-manager.jpg"
    },
    {
        nome: "Angela Lopez",
        ruolo: "Social Media Manager",
        immagine: "angela-lopez-social-media-manager.jpg"
    },
    {
        nome: "Scott Estrada",
        ruolo: "Developer",
        immagine: "scott-estrada-developer.jpg"
    },
    {
        nome: "Barbara Ramos",
        ruolo: "Graphic Designer",
        immagine: "barbara-ramos-graphic-designer.jpg"
    }
];


for (let i = 0; i < team.length; i++) {
    console.log(team[i]["nome"] + " " + team[i]["ruolo"])
    document.querySelector(".container").innerHTML += ` 
    <div class="card" style="width: 18rem;">
        <img src="./img/${team[i]["immagine"]}" class="card-img-top" alt="" id="immagine">
        <div class="card-body">
            <p class="card-text" id="nome">${team[i]["nome"]}</p>
            <p class="card-text" id="ruolo">${team[i]["ruolo"]}</p>

        </div>
    </div> `
}