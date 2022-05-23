//store the products array in localstorage as "products"
document.querySelector("#products").addEventListener("submit",myfunction);

var prdArr = JSON.parse(localStorage.getItem("products")) || [];

function myfunction(){
    event.preventDefault();

    var prdtobj = {
        type : document.querySelector("#type").value,
        desc : document.querySelector("#desc").value,
        price : document.querySelector("#price").value,
        image : document.querySelector("#image").value,
    }

    prdArr.push(prdtobj);
    localStorage.setItem("products",JSON.stringify(prdArr));
}