
    

    function draw(){
    const ctx = document.getElementById("myCircle").getContext("2d");
    ctx.arc(200,200,100,0,Math.PI*2,'#000000'); 
    ctx.stroke();
    ctx.fillStyle = '#213273';
    ctx.fill();

    class circle {
        constructor(x, y, r, startAngle, endAngle, fillColor) {
    this.x = x
    this.y = y
    this.r = r
    this.startAngle = startAngle
    this.endAngle = endAngle
    this.fillColor = fillColor
    }
}
 let c1 = new circle (200,200,100,0,Math.PI*2,'#000000')
    }

    window.draw();


