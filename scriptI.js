let ele= document.querySelector("canvas");

let dib = ele.getContext("2d");


function pantallaExterior(y,o) {
    dib.beginPath();
    dib.strokeStyle = `rgba(63, 103, 151,${o})`;
    dib.moveTo(50,y);
    dib.lineTo(100, y);
    dib.arc(100, 5+y, 5, Math.PI*3/2,0,false);
    dib.lineTo(105, 30+y);
    dib.arc(100, 30+y, 5, 0,Math.PI/2,false);
    dib.lineTo(50, 35+y);
    dib.arc(50, 30+y, 5, Math.PI/2,Math.PI,false);
    dib.lineTo(45, 5+y);
    dib.arc(50, 5+y, 5, Math.PI,Math.PI*3/2,false);
    dib.stroke();
    dib.fillStyle = `rgba(63, 103, 151,${o})`;
    dib.fill();
}

function tecladoExterior(y,o) {
    dib.beginPath();
    dib.strokeStyle = `rgba(63, 103, 151,${o})`;
    dib.moveTo(55.5,43+y);
    dib.lineTo(95.5, 43+y);
    dib.lineTo(115.5, 62+y);
    dib.lineTo(30.5, 62+y);
    dib.lineTo(55.5, 43+y);
    dib.stroke();
    dib.fillStyle = `rgba(63, 103, 151,${o})`;
    dib.fill();
}

function pantallaInterior(y,o) {
    dib.beginPath();
    dib.strokeStyle = `rgba(177, 213, 228,${o})`;
    dib.moveTo(55,y);
    dib.lineTo(95, y);
    dib.arc(95, 5+y, 5, Math.PI*3/2,0,false);
    dib.lineTo(100, 20+y);
    dib.arc(95, 20+y, 5, 0,Math.PI/2,false);
    dib.lineTo(55, 25+y);
    dib.arc(55, 20+y, 5, Math.PI/2,Math.PI,false);
    dib.lineTo(50, 5+y);
    dib.arc(55, 5+y, 5, Math.PI,Math.PI*3/2,false);
    dib.stroke();
    dib.fillStyle = `rgba(177, 213, 228,${o})`;
    dib.fill();
}

function tecladoInterior(y,o) {
    dib.beginPath();
    dib.strokeStyle = `rgba(177, 213, 228,${o})`;
    dib.moveTo(57.5,41+y);
    dib.lineTo(92.5, 41+y);
    dib.lineTo(104.5, 53+y);
    dib.lineTo(43.5, 53+y);
    dib.lineTo(57.5, 41+y);
    dib.stroke();
    dib.fillStyle = `rgba(177, 213, 228,${o})`;
    dib.fill();
}

var frameI=1;
var yInt=0;
var yExt=0;
var frame=1;
var frames=25;
var op=0;
function animacionLogoExterior() {
    dib.clearRect(0,0,150,80);
    yExt +=(10/(frames));
    //dib.globalAlpha += (1/(frames));
    op += (1/(frames));
    pantallaExterior(yExt,op);
    tecladoExterior(yExt,op);
    if (frame!=frames) {
        frame++;
        window.requestAnimationFrame(animacionLogoExterior);
    }
}
function animacionLogoInterior() {
    dib.clearRect(0,0,150,80);
    yInt +=(15/(frames));
    op = frameI*(1/(frames));
    pantallaExterior(10,1);
    tecladoExterior(10,1);
    pantallaInterior(yInt,op);
    tecladoInterior(yInt,op); 
    if (frameI!=frames) {
        frameI++;
        window.requestAnimationFrame(animacionLogoInterior);
    }
    else{
        console.log(yInt);
        console.log(frameI);
        dib.globalAlpha = 1;
    }
}
window.setTimeout(animacionLogoExterior, 800);

window.setTimeout(animacionLogoInterior, 1200);