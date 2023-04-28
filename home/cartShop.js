let alertNumberCart = document.getElementById("alertNumberCart");

function AlertCartFunction() {
    if (localStorage.memoryCart != undefined) {
        let alertMemory = JSON.stringify(localStorage.memoryCart);
        let arrNumberAlerts = alertMemory.split(",");
        arrNumberAlerts = arrNumberAlerts.filter(value => value != '"' && value != '""');
        if (arrNumberAlerts.length != 0) {
            alertNumberCart.style.display = "inline-flex";
            alertNumberCart.textContent = arrNumberAlerts.length;
        } else {
            alertNumberCart.style.display = "none";
        };
    } else {
        alertNumberCart.style.display = "none";
    };
};
AlertCartFunction();

const contentSales = document.getElementById("contentSales");
let contentSalesDivs = contentSales.getElementsByTagName("i");
let arrMemoryCart = localStorage.memoryCart;
let addCartClick = document.querySelectorAll(".addCartClick").forEach(add => add.addEventListener("click", () => {
    arrMemoryCart = localStorage.memoryCart; 
    let plusEle;
    let numberEle;
    let notEqual = true;
    let addMemory = [...contentSalesDivs].indexOf(add);
    if (arrMemoryCart != undefined) {
        arrMemoryCart = arrMemoryCart.split(",");
        if (arrMemoryCart[0] == '""') {
            arrMemoryCart.shift();
        };
        arrMemoryCart.forEach(e => {
            if (e != undefined) {
                if (e.indexOf('-') > -1) {
                    plusEle = e.split("-");
                    numberEle = parseInt(plusEle[1]);
                    plusEle = plusEle[0];
                } else {
                    plusEle = e;
                    numberEle = 1;
                };
                if (addMemory == plusEle && plusEle != '') {
                    numberEle += 1;
                    addMemory = arrMemoryCart.indexOf(e);
                    arrMemoryCart.splice(addMemory, 1);
                    console.log(arrMemoryCart)
                    arrMemoryCart.push(plusEle + "-" + numberEle);
                    notEqual = false;
                };
            }; 
        });
        if (notEqual) {
            arrMemoryCart.push(addMemory);
        };
    } else {
        arrMemoryCart = addMemory;
    };
    localStorage.memoryCart = arrMemoryCart;
    arrMemoryCart = [];
    AlertCartFunction();
     ViewCartContentFunction();
}));

const cartView = document.getElementById("cartView");
const cartVisor = document.getElementById("cartVisor");
let cartContent = document.getElementById("cartContent").addEventListener("click", ViewCartContentFunction);

function ViewCartContentFunction() {
    cartView.style.display = "block";
    if (localStorage.memoryCart != undefined) {
        cartVisor.innerHTML = ``;
        let element;
        let amountElement;
        let numberMemory = JSON.stringify(localStorage.memoryCart);
        numberMemory = numberMemory.replace(/"/g, '');
        let arrNumberProducts = numberMemory.split(",");
        
        arrNumberProducts.forEach(e => {
            if (e.indexOf('"') > -1) {
                e = e.replace(/"/g, '');
            };
            if (e.indexOf('-') > -1) {
                element = e.split("-");
                amountElement = element[1];
                element = element[0];
            } else {
                element = e;
                amountElement = 1;
            };
            if (element != '') {
            let elementProductCart = contentSalesDivs[element];
            elementProductCart = elementProductCart.parentElement;
            elementProductCart = elementProductCart.parentElement;
            let elementProductCartImg = elementProductCart.querySelector("img");
            elementProductCartImg = elementProductCartImg.getAttribute("src");
            let elementProductCartText = elementProductCart.textContent;
            elementProductCartText = elementProductCartText.split("R$");
            elementProductCartText[0] = elementProductCartText[0].trim();
            elementProductCartText[0] = elementProductCartText[0].length > 50 ? elementProductCartText[0].substring(0, 49) + "...": elementProductCartText[0];
            cartVisor.innerHTML += `
            <div class="product-cart">
                <img class="img-product-cart" src="${elementProductCartImg}" alt="">
                <p>${elementProductCartText[0]} |</p><strong class="price">R$ ${elementProductCartText[1]}</strong><p>| Quantidade: ${amountElement}</p>
                <i class="fa-solid fa-trash-can fa-sm trashIcon"></i>
            </div><br>
            `;
            let cartVisorIndexIcons = cartVisor.getElementsByTagName("i");
            let trashIcon = document.querySelectorAll(".trashIcon").forEach(eve => {
                eve.addEventListener("click", () => {
                    if (arrNumberProducts[0] == '') {
                        arrNumberProducts.shift();
                    };
                    let index = [...cartVisorIndexIcons].indexOf(eve);
                    arrNumberProducts.splice(index, 1);
                    localStorage.memoryCart = arrNumberProducts;
                    arrNumberProducts = '';
                    ViewCartContentFunction();
                    AlertCartFunction();
                });
            });
            };
        });
    } else {
        cartVisor.innerHTML = ``;
    };
}; 

const exitCart = document.getElementById("exitCart").addEventListener("click", () => cartView.style.display = "none");
const clearCart = document.getElementById("clearCart").addEventListener("click", () => {
    localStorage.removeItem("memoryCart");
    ViewCartContentFunction();
    AlertCartFunction();
});

let index;
let elementNumber;
let elementPlus;

function ButtonAddCartFunction(icon, indexOfBarSearch) {
    const buttonAddCart = document.getElementById("buttonAddCart").addEventListener("click", () => {
        let notEqual = true;
        let arrAddMemory = localStorage.memoryCart;
        console.log(indexOfBarSearch)
        if (indexOfBarSearch != undefined) {
            index = indexOfBarSearch;
        } else {
            index = [...contentSalesDivs].indexOf(icon);
        };
        if (arrAddMemory != undefined) {
            arrAddMemory = arrAddMemory.split(",");
            if (arrAddMemory[0] == '""') {
                arrAddMemory.shift();
            };
            arrAddMemory.forEach(e => {
                if (e != undefined) {
                    if (e.indexOf('-') > -1) {
                        elementPlus = e.split("-");
                        elementNumber = parseInt(elementPlus[1]);
                        elementPlus = elementPlus[0];
                    } else {
                        elementPlus = e;
                        elementNumber = 1;
                    };
                    if (index == elementPlus && elementPlus != '') {
                        elementNumber += parseInt(viewAmount.value);
                        index = arrAddMemory.indexOf(e);
                        arrAddMemory.splice(index, 1);
                        arrAddMemory.push(elementPlus + "-" + elementNumber);
                        localStorage.memoryCart = arrAddMemory;
                        arrAddMemory = [];
                        notEqual = false;
                    };
                }; 
            });
            if (notEqual) {
                if (viewAmount.value > 1) {
                    index = index + "-" + viewAmount.value;
                } else {
                    index = index;
                };
                arrAddMemory.push(index);
                localStorage.memoryCart = arrAddMemory;
                arrAddMemory = [];
            }; 
        } else {
            if (viewAmount.value > 1) {
                localStorage.memoryCart = index + "-" + viewAmount.value;
            } else {
                localStorage.memoryCart = index;
            };
        };
        AlertCartFunction();
        ViewCartContentFunction();
    });
};
}));
