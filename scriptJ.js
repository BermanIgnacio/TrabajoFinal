function inicioDrag(e) {
    e.dataTransfer.setData('tagText','img');
    e.dataTransfer.setData('srcText',`${e.target.src}`);
    e.dataTransfer.setData('idText',`${e.target.id}`);
}

function finDrag(e) {
   e.target.style.visibility = "hidden";
   //---------------------Opcional---------------------------------
   //Cuando se esconda las 3 imagenes, se borra el espacio entre el puzzle y el boton de reinicio
   hide++;
   if(hide==3) {
        let elem = document.getElementById("puzzleimagenes"); 
        elem.parentNode.removeChild(elem);
        elem = document.querySelector("button");
        elem.classList.add("espacioReinicio");
    }
   //---------------------------------------------------------------
}

function configurarZona() {    
    let puzzles=document.querySelectorAll('.puzzle div');
    puzzles.forEach(puzzle => {
        puzzle.addEventListener("dragover",(e)=>{
            e.preventDefault();
        });  
        puzzle.addEventListener("drop",(e)=>{
            e.preventDefault();
            let srcTxt= e.dataTransfer.getData("srcText");
            let idTxt= e.dataTransfer.getData("idText");
            if (e.dataTransfer.getData("tagText")=="img") 
                e.currentTarget.innerHTML=`<img id="${idTxt}" src="${srcTxt}"></img>`;
        });
    });
}
function configurarImagenes() {
    let imagenes=document.querySelectorAll('#puzzleimagenes img');
    imagenes.forEach(img => {
        img.addEventListener("dragstart",inicioDrag);
        img.addEventListener("dragend",finDrag);
    });
}

function configurarReinicio() {
    let reinicio = document.querySelector("button");
    reinicio.addEventListener("click",()=>{
        window.location.reload();
    });
}

let hide=0;
configurarZona();
configurarImagenes();
configurarReinicio();