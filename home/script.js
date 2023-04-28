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

const productsViewInfo = document.getElementById("productsViewInfo");
const menuSmallView = document.getElementById("menuSmallView");
const barPrincipal = document.getElementById("barPrincipal");
const blurBackground = document.getElementById("blurBackground");
const contentSalesProducts = document.getElementById("contentSales");
let productClick = document.querySelectorAll(".productClick").forEach(e => {
    e.addEventListener("click", function () {
        barPrincipal.style.display = "none";
        menuSmallView.style.display = "none";
        productsViewInfo.style.display = "block";
        contentSalesProducts.style.filter = "blur(8px)";
        blurBackground.style.display = "block";
        let imgProductInfo = e.querySelector("img");
        imgProductInfo = imgProductInfo.getAttribute("src");
        let textProductInfo = e.textContent;
        textProductInfo = textProductInfo.split("R$");
        productsViewInfo.innerHTML = `
            <i class="fa-solid fa-square-xmark fa-xl exit-info-product" id="clickExitProduct"></i>
            <img src="${imgProductInfo}" alt="" class="img-product-info">
            <div class="info-product-text">
                <h1>${textProductInfo[0]}</h1>
                <h2 class="price">R$${textProductInfo[1]}</h2>
                <hr>
                <div class="amount-products" id="amountProducts">
                    <div class="buttons-amount"><button id="plusProducts" class="plus-products"><i class="fa-solid fa-plus fa-sm"></i></button><input type="number" value="1" class="view-amount" id="viewAmount" min="1"><button class="minus-products" id="minusProducts"><i class="fa-solid fa-minus fa-sm"></i></button></div>
                </div>
                <button class="button-add-cart" id="buttonAddCart">Adicionar ao carrinho<i class="fa-solid fa-cart-plus fa-xl"></i></button>        
            </div>
        `;
        const amountProducts = document.getElementById("amountProducts");
        let viewAmount = document.querySelector("#viewAmount");
        let amountProductsNumber = 1;
        const plusProducts = document.getElementById("plusProducts").addEventListener("click", () => {
            viewAmount.value = ++amountProductsNumber;
        });
        const minusProducts = document.getElementById("minusProducts").addEventListener("click", () => {
            if (viewAmount.value > 1) {
                viewAmount.value = --amountProductsNumber;
            };
        }); 
        let icon = e.parentElement;
        icon = icon.querySelector("i");
        ButtonAddCartFunction(icon);
        let clickExitProduct = document.getElementById("clickExitProduct").addEventListener("click", () => {
            if (screen.width >= 720) {
                barPrincipal.style.display = "inline-flex";
            } else {
                barPrincipal.style.display = "block";
            };
            menuSmallView.style.display = "block";
            productsViewInfo.style.display = "none";
            contentSalesProducts.style.filter = "blur(0px)";
            blurBackground.style.display = "none";
        });
    });
});