function Apple( color, weight){
    this.color = color;
    this.weight = weight;
};

Apple.prototype = {
    eat : function (){ return "Eat the Apple !!!"; },
    throw : function(){ return "Dont throw the eaten apple anywhere"; }
};

// Apple.prototype is common code snippet for all the child objects of the Apple object. This saves the space.

var apple1 = new Apple("red",200,"eat");
console.log(apple1.eat);
var apple2 = new Apple("brown", 150, "eat");
console.log(apple2.eat);