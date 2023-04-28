let productsSearch = document.querySelectorAll(".box-product");
let barSearch = document.querySelector("#barSearch");
const buttonSearch = document.getElementById("buttonSearch").addEventListener("click", SearchResponseFunction);
const contentSalesElements = document.getElementById("contentSales");
let elementOfProducts = contentSalesElements.getElementsByTagName("i");
const productsSearchVisor = document.getElementById("productsSearchVisor");
const searchVisor = document.getElementById("searchVisor");
const visorSearchResponse = document.getElementById("visorSearchResponse");
let arrProductsSearch = [];
barSearch.addEventListener("keyup", SearchFunction);
barSearch.addEventListener("keypress", e => {
    if (e.key == "Enter") {
        SearchResponseFunction();
    };
});

function SearchFunction() {
    let valueBarSearch = barSearch.value;
    productsSearchVisor.innerHTML = "";
    arrProductsSearch = [];
    productsSearch.forEach(e => {
        let productNoSpace = e.textContent.trim();
        let indexProductText = productNoSpace.indexOf("R$");
        productNoSpace = productNoSpace.toLowerCase();
        valueBarSearch = valueBarSearch.toLowerCase();
        if (productNoSpace.substring(0, indexProductText).indexOf(valueBarSearch) > -1 && valueBarSearch != '') {
            arrProductsSearch.push([...elementOfProducts].indexOf(e.querySelector("i")));
            if (arrProductsSearch.length <= 6) {
                productsSearchVisor.innerHTML += `<a href="" class="response-search"><i class="fa-solid fa-magnifying-glass fa-sm"></i> ` + productNoSpace.substring(0, indexProductText) + "</a><br>";
                searchVisor.style.display = "block";
                searchVisor.style.textAlign = "start";
            };
        };
    });
    if (arrProductsSearch.length <= 0 && valueBarSearch == '') {
        searchVisor.style.display = "none";
    } else if (arrProductsSearch.length <= 0 && valueBarSearch != '') {
        productsSearchVisor.innerHTML = `<i class="fa-solid fa-triangle-exclamation fa-lg"></i><br><strong style="color: rgb(0,74,173);">Oops!!</strong> Não encontrei nada`;
        searchVisor.style.textAlign = "center";
    };
};

function SearchResponseFunction() {
    visorSearchResponse.innerHTML = "";
    contentSalesElements.style.display = "none";
    searchVisor.style.display = "none"; 
    arrProductsSearch.forEach(e => {
        let elementProduct = contentSalesDivs[e];
        elementProduct = elementProduct.parentElement;
        elementProduct = elementProduct.parentElement;
        let elementProductImg = elementProduct.querySelector("img");
        elementProductImg = elementProductImg.getAttribute("src");
        let elementProductText = elementProduct.textContent;
        elementProductText = elementProductText.split("R$");
        visorSearchResponse.innerHTML += `
            <div class="box-product" data-indexProduct="${e}">
                <div class="productClick">
                    <img class="img-product" src="${elementProductImg}" alt="">
                    <hr>
                    <p class="info-products">${elementProductText[0]}</p><strong class="price">R$${elementProductText[1]}</strong>
                </div>         
            </div>
        `;
    });
    productClick = document.querySelectorAll(".productClick").forEach(e => {
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
            let indexProduct = e.parentElement;
            indexProduct = indexProduct.getAttribute("data-indexProduct");
            ButtonAddCartFunction(undefined, indexProduct);
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
};