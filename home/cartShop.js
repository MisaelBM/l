let alertNumberCart = document.getElementById("alertNumberCart");

function AlertCartFunction() {
    let alertMemory = JSON.stringify(localStorage.memoryCart);
    let arrNumberAlerts = alertMemory.split(",");
    arrNumberAlerts = arrNumberAlerts.filter(value => value != '"' && value != '""');
    if (arrNumberAlerts.length != 0) {
        alertNumberCart.style.display = "inline-flex";
        alertNumberCart.textContent = arrNumberAlerts.length;
    } else {
        alertNumberCart.style.display = "none";
    };
};
AlertCartFunction();

const contentSales = document.getElementById("contentSales");
let contentSalesDivs = contentSales.getElementsByTagName("i");
let arrMemoryCart = [localStorage.memoryCart];
let addCartClick = document.querySelectorAll(".addCartClick").forEach(add => add.addEventListener("click", e => { 
    function MemoryCartFunction() {
        let addMemory = [...contentSalesDivs].indexOf(add);
        arrMemoryCart.push(addMemory);
        localStorage.memoryCart = arrMemoryCart;
    };
    function RemoveMemoryCartFunction() {
        let removeMemory = [...contentSalesDivs].indexOf(add);
        let indexRemove = arrMemoryCart.indexOf(removeMemory);
        arrMemoryCart.splice(indexRemove, 1);
        localStorage.memoryCart = arrMemoryCart;
    };
    add.classList.toggle("fa-cart-plus");
    add.classList.toggle("fa-circle-xmark");
    if (add.classList[2] == "fa-circle-xmark") {
        MemoryCartFunction();
    } else {
        RemoveMemoryCartFunction();
    };
    AlertCartFunction();
}));