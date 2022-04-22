const hamb=document.querySelector("#hamb");
const popup=document.querySelector("#popup");
const menu=document.querySelector("#menuheader").cloneNode(1);
const menuchat=document.querySelector("#menuchat").cloneNode(1);
hamb.addEventListener("click",hambHandler);
const body=document.body;

function hambHandler(e){
    e.preventDefault();
    popup.classList.toggle("open");
    hamb.classList.toggle("active");
    body.classList.toggle("noscroll");
    renderpopup();

}
function renderpopup(){
    popup.appendChild(menu);
    popup.appendChild(menuchat);
}