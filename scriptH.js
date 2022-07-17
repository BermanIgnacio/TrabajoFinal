let video = document.querySelector("video");

video.onloadedmetadata = function() {
    let time = document.getElementById("tiempo");
    time.textContent=" Duracion video : "+this.duration.toFixed(2);
};

let botones = document.querySelectorAll("button");

botones[0].addEventListener("click",()=>{
    video.play();
});

botones[1].addEventListener("click",()=>{
    video.pause();
})