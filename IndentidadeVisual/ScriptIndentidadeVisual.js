const listEnterprise = document.getElementById("listEnterprise");
let buttonEnterprise = document.getElementById("buttonEnterprise").addEventListener("click", e => {
    let classButton = e.target;
    if (classButton.nodeName != "I") {
        classButton = classButton.querySelector('i');
        classButton.classList.toggle("fa-chevron-down");
        classButton.classList.toggle("fa-chevron-up");
    } else {
        classButton.classList.toggle("fa-chevron-down");
        classButton.classList.toggle("fa-chevron-up");
    };
    listEnterprise.classList.toggle("list-enterprise-anim");
});

const listProducts = document.getElementById("listProducts");
let buttonProducts = document.getElementById("buttonProducts").addEventListener("click", () => listProducts.classList.toggle("list-products-anim"));