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
    },
    {
        team: "Astro",
        unv: "LMUM",
        country: "Alemanha"
    },
    {
        team: "UnRoma",
        unv: "Universidade de Roma",
        country: "Italia"
    },
    {
        team: "La equipo",
        unv: "Universidad Nacional La Plata",
        country: "Argentina"
    },
]

window.addEventListener("DOMContentLoaded", function () {
    const lista = document.querySelector("#lista");
    console.log("c")
    for (let i = 0;i<data.length;i++) {
        const li = document.createElement("li");
        li.innerHTML = "team";
        const h3 = document.createElement("h3");
        h3.innerHTML = "unv"
        const p1 = document.createElement("p");
        p1.innerHTML = "country"
        
        li.innerHTML = data.team
        lista.appendChild(li);
    }
    function criaElemento(country, team, unv,end) {
        const lista = document.querySelector("#lista");
        const li = document.createElement("li");
        li.className = "item"; 
        li.innerHTML = "team"
        const h3 = document.createElement("h3");
        h3.innerHTML = ;
        const p = document.createElement("p");
        p.innerHTML = telefone;
})