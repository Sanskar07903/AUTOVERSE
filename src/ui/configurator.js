export function setupConfigurator(){

    const panel = document.getElementById("configurator");

    const openBtn = document.getElementById("configBtn");

    const closeBtn = document.getElementById("closeConfigurator");

    openBtn.addEventListener("click",()=>{

        panel.classList.add("open");

    });

    closeBtn.addEventListener("click",()=>{

        panel.classList.remove("open");

    });

}