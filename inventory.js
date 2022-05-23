var page_data = JSON.parse(localStorage.getItem("products"))

page_data.map(function(elem,index){

    let box = document.createElement("div");
    box.style.boxShadow = 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px';
    box.style.borderRadius = "20px"
    box.style.paddingBottom = "30px"

    let img = document.createElement("img");
    img.src = elem.image;
    img.style.width = "100%"
    img.style.height = "450px"
    img.style.borderRadius = "20px 20px 0px 0px"


    let h = document.createElement("h3")
    h.innerText = elem.type;

    let p = document.createElement("p");
    p.innerText = elem.desc;

    let h1 = document.createElement("h3");
    h1.innerText = elem.price;


    let btn = document.createElement("button");
    btn.innerText = "Remove";
    btn.setAttribute("id","remove_product");
    btn.style.color = "white"
    btn.style.cursor = "pointer"
    btn.style.border = "2px solid slateblue"
    btn.style.borderRadius = "20px"
    btn.style.padding = "10px 25px"
    btn.style.fontSize = "larger"

    btn.addEventListener("click",function(){
        RemoveItem(elem,index)
    })

    box.append(img,h,p,h1,btn)

    document.getElementById("all_products").append(box);
})

function RemoveItem(elem,index){
    page_data.splice(index,1)
    localStorage.setItem("products",JSON.stringify(page_data));
    window.location.reload()
}