function Apple(x, y, color, price) {
  this.x = x;
  this.y = y;
  this.color = color;
  this.price = price;
}

var apple1 = new Apple(10, 20, "RED", 2000);
console.log(apple1);

var apple2 = new Apple(200, 30, "BLUE", 4000);
console.log(apple2);
