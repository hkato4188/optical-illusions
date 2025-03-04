const myCanvas= document.getElementById("myCanvas");
const ctx = myCanvas.getContext("2d");
const {width, height} = myCanvas;


ctx.translate(width/2, height/2);

animate();



function drawCircle(x,y,radius=20){
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI*2);
    ctx.fill();
}

function animate(){
    ctx.clearRect(-width/2, -height/2, width, height)
    const offset = Date.now()/1000;
    
    const x = Math.sin(offset) * width /2;
    drawCircle(x,0)

    requestAnimationFrame(animate)

}