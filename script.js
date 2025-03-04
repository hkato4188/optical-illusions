const myCanvas= document.getElementById("myCanvas");
const ctx = myCanvas.getContext("2d");
const {width, height} = myCanvas.myCanvas;


ctx.translate(width/2, height/2);

drawCircle(0,0);


function drawCircle(x,y,radius=20){
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI*2);
    ctx.fill();
}