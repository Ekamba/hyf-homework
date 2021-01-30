let circle = document.getElementById("Canvas");
 let ctx = circle.getContext('2d');
  ctx.beginPath();
ctx.arc(150, 75, 50, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.fillStyle = "green"
  ctx.fill();

 