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