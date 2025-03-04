const myCanvas= document.getElementById("myCanvas");
const ctx = myCanvas.getContext("2d");
const {width, height} = myCanvas;

// increase and decrease for visual aid
// const circleCount = 200;
const circleCount = 20;

ctx.translate(width/2, height/2);

animate();

function animate(){
    ctx.clearRect(-width/2, -height/2, width, height)
    

    
    for(let i=0; i<circleCount; i++){
        // spread circles by adding to offset based on PI
        
        // what if you do not add to the offset (fan out effect)? 
        // const offset = Date.now()/1000;
        
        // what if you do not add a small number to the offset and multiply by i (curling effect)?
        // const offset = Date.now()/1000 + 0.5 * i * Math.PI / circleCount;

        // what if you do not add a large number to the offset and multiply by i (curling effect)?
        // Odd numbers close the loop eliminates teh curcling effect
        // const offset = Date.now()/1000 + 3 * i * Math.PI / circleCount;
        
        // Craziest
        // const s = Math.sin(Date.now()/1000);
        // const s = 1 +Math.sin(Date.now()/1000);
        // const offset = Date.now()/1000 + s * i * Math.PI / circleCount;


        // Code for circle
        const offset = Date.now()/1000 + i * Math.PI / circleCount;
        
        
        const x = Math.sin(offset) * height /2;
        ctx.save();
        ctx.rotate(i*Math.PI/circleCount)

        drawCircle(x,0);
        // fill the middle circle for debugging
        // if(i===circleCount/2) ctx.fill();
        // fill the first circle
        if(i===circleCount/2) ctx.fill();
        ctx.restore();
    }    
    
    requestAnimationFrame(animate);
}

function drawCircle(x,y,radius=20){
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI*2);
    
    // change ctx draw method to stroke and only fill one circle
    ctx.stroke()
    // ctx.fill();
}