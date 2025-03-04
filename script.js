const myCanvas= document.getElementById("myCanvas");
const ctx = myCanvas.getContext("2d");
const {width, height} = myCanvas;
const circleCount = 10;

ctx.translate(width/2, height/2);

animate();

function animate(){
    ctx.clearRect(-width/2, -height/2, width, height)
    
    for(let i=0; i<circleCount; i++){
        // spread circles by adding to offset based on PI
        const offset = Date.now()/1000 + i + Math.PI / circleCount;
        const x = Math.sin(offset) * width /2;
        drawCircle(x,0);
    }    
    requestAnimationFrame(animate);
}

function drawCircle(x,y,radius=20){
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI*2);
    ctx.fill();
}