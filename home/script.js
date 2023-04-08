const menu = document.getElementById("menu").addEventListener("click", Anim);
let linha1 = document.querySelector(".linha1");
let linha2 = document.querySelector(".linha2");
let linha3 = document.querySelector(".linha3");
let menuSmall = document.querySelector(".menu-view-small");

function Anim() {
    linha1.classList.toggle("linha1Anim");
    linha2.classList.toggle("linha2Anim");
    linha3.classList.toggle("linha3Anim");
    menuSmall.classList.toggle("menu-view-small-bottom");
};

const barraDePesquisa = document.getElementById("barSearch");
let indexBarra = 0;
    
setInterval (
    function () {
        if (indexBarra == 0) {
            barraDePesquisa.placeholder = "Extintores";
            ++indexBarra;
        } else if (indexBarra == 1) {
            barraDePesquisa.placeholder = "Placas";
            ++indexBarra;
        } else if (indexBarra == 2) {
            barraDePesquisa.placeholder = "Suportes";
            ++indexBarra;
        } else if (indexBarra == 3) {
            barraDePesquisa.placeholder = "Kits";
            ++indexBarra;
        } else {
            barraDePesquisa.placeholder = "Busque aqui";
            indexBarra = 0;
        };
    }
,6000);

