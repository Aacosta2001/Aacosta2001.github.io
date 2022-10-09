var articuloExpandido = document.getElementById("artBlogExp");
var botonVer = document.getElementsByClassName("btnVer");

for (let elemento of botonVer){
    elemento.addEventListener("click",function(){
        let copy = this.parentNode.innerHTML;
        copy = copy.replace(`<button class="btnVer">VER MÁS</button>`,"");
        articuloExpandido.innerHTML = `
        <button id="cerrar" onclick="cerrar()"><ion-icon name="close-outline"></ion-icon></button>
        ` + copy;

        articuloExpandido.style.display = "flex";
    })
}

function cerrar(){
    articuloExpandido.style.display = "none";
}

