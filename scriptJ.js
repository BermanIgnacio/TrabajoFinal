function inicioDrag(e) {
    e.dataTransfer.setData('srcText',`${e.target.src}`);
    e.dataTransfer.setData('idText',`${e.target.id}`);
}

function finDrag(e) {
   e.target.style.visibility = "hidden";
   //---------------------Opcional---------------------------------
   hide++;
   if(hide==3) {
        var elem = document.getElementById("puzzleimagenes"); 
        elem.parentNode.removeChild(elem);
        elem = document.querySelector("button");
        elem.style.margin = "20px auto";
    }
   //---------------------------------------------------------------
}

function configurarZona() {    
    var puzzles=document.querySelectorAll('.puzzle div');
    puzzles.forEach(puzzle => {
        puzzle.addEventListener("dragover",(e)=>{
            e.preventDefault();
        });  
        puzzle.addEventListener("drop",(e)=>{
            let srcTxt= e.dataTransfer.getData("srcText");
            let idTxt= e.dataTransfer.getData("idText");
            e.currentTarget.innerHTML=`<img id="${idTxt}" src="${srcTxt}"></img>`;
        });
    });
}

function configurarImagenes() {
    var imagenes=document.querySelectorAll('#puzzleimagenes img');
    imagenes.forEach(img => {
        img.addEventListener("dragstart",inicioDrag);
        img.addEventListener("dragend",finDrag);
    });
}

function configurarReinicio() {
    let reinicio = document.querySelector("button");
    console.log(reinicio);
    reinicio.addEventListener("click",()=>{
        window.location.reload();
    });
}

var hide=0;
configurarImagenes();
configurarZona();
configurarReinicio();