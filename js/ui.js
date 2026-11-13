import { getdata } from "./data"

let data = getdata();
let count = 0 ;
const p = document.querySelectorAll("dachdescription")

export function dashbord(){
    p = data[count].description;
    p.t
    count++;
}

export function popup(){
    const box = document.getElementById("popup")
    const close = document.getElementById("closeAI")
    const open = document.getElementById("openAI")
    
    open.addEventListener("click", ()=>  {
     box.showModal();
    });
    close.addEventListener("click", ()=>{
        box.classList.remove("popup");
        box.close();
    });
}   