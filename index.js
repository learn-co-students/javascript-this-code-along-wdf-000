function Sandwich(bread, ingredients, name) {
  this.name = name;
  this.bread = bread;
  this.ingredients = ingredients;
}

function serve(customer, num) {
    console.log("Hi "+ customer + ", here's your " + num + " " + this.name + "(s). Enjoy!");
  }""
var blt = new Sandwich("white", ["bacon","lettuce","tomato","mayo"],"BLT");

serve.call(blt, "Nii", 3)