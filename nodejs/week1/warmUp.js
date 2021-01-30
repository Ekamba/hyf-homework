class circle {
  constructor(radius) {
    this.radius = radius;

    // Area

    this.area = () => Math.PI * this.radius * this.radius;

    // Diametre

    this.diametre = () => 2 * this.radius;

    // Circomference

    this.circumference = () => 2 * Math.PI * this.radius;
  }
}

const c = new circle(10);
console.log("Area =", c.area().toFixed(2));
console.log("diametre =", c.diametre().toFixed(2));
console.log("circumference =", c.circumference().toFixed(2));

const cir = new circle(8);
console.log("Area =", cir.area().toFixed(2));
console.log("diametre =", cir.diametre().toFixed(2));
console.log("circumference =", cir.circumference().toFixed(2));

const circ = new circle(6);
console.log("Area =", circ.area().toFixed(2));
console.log("diametre =", circ.diametre().toFixed(2));
console.log("circumference =", circ.circumference().toFixed(2));
