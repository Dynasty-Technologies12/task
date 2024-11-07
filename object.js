var javaScriptObject = {};
var testArray = [1, 2, 3, 4];

javaScriptObject.array = testArray;
console.log(javaScriptObject);

javaScriptObject.title = "Algorithms";
console.log(javaScriptObject);

// prototypal inheritance using constructor

function ExampleClass() {
  this.name = "JavaScript";
  this.sayName = function () {
    console.log(this.name);
  };
}

var example1 = new ExampleClass();
example1.sayName();

// prototypal inheritance using .prototype

function ExampleClass() {
    this.array = [1, 2, 3, 4, 5];
    this.name = "Javascript";
}

var example1 = new ExampleClass(); // new object

ExampleClass.prototype.sayName = function() {
    console.log(this.name);
}