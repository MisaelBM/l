const menu = document.getElementById("menu").addEventListener("click", anim);
let linha1 = document.querySelector(".linha1");
let linha2 = document.querySelector(".linha2");
let linha3 = document.querySelector(".linha3");

function anim() {
    linha1.classList.toggle("linha1Anim");
    linha2.classList.toggle("linha2Anim");
    linha3.classList.toggle("linha3Anim");
};

const barraDePesquisa = document.getElementById("barSearch");
let indexBarra = 0

    setInterval (
        function () {
            if (indexBarra == 0) {
                barraDePesquisa.placeholder = "Extintores"
                ++indexBarra
            } else if (indexBarra == 1) {
                barraDePesquisa.placeholder = "Placas"
                ++indexBarra
            } else {
                barraDePesquisa.placeholder = "Busque aqui"
                indexBarra = 0
            }
        }
    ,6000);