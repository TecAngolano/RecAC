const data = [
    {
        team: "ScienceVersus",
        unv: "USP",
        country: "Brasil"
    },
    {
        team: "RobotC",
        unv: "Harvard",
        country: "EUA"
    },
    {
        team: "The Bow Ties",
        unv: "Cambridge",
        country: "Inglaterra"
    },
    {
        team: "LambdaUn",
        unv: "ETHZ",
        country: "Suiça"
    }
    {
        team: "Astro",
        unv: "LMUM",
        country: "Alemanha"
    },
    {
        team: "UnRoma",
        umv: "Universidade de Roma",
        country: "Italia"
    },
    {
        team: "La equipo",
        unv: "Universidad Nacional La Plata",
        connotry: "Argentina"
    },
]

window.addEventListener("DOMContenteLoaded", function () {
    const lista = document.querySelector("#lista");
    
    for (cons i of data) {
        let li = document.createElement("l1");
        let h3 = document.createElement("h3");
        let p1 = document.createElement("p");
        let p2 = document.createElement("li");

        h3.innerHTML = i.team;
        p1.innerHTML = i.unv;
        p2.innerHTML = i.country;

        li.appendChild(h3);
        li.appendChild(p1);
        li.appendChild(p2);

        lista.apendChild(li);
    }
    
})