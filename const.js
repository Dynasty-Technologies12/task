function exampleClass(name, size) {
    this.name = name;
    this.size = size;
}

var newexample = new exampleClass("Public", 5);
console.log(newexample);

// using getter and setter

function ExampleClass(name, size) {
    var privateName = name;
    var privateSize = size;

    this.getName = function() {
        return privateName;
    }
    
    this.setName = function(name) {
        privateName = name;
    }

    this.getSize = function() {
        return privateSize;
    }

    this.setSize = function() {
        privateSize = size
    }
}

var example = new ExampleClass("Sammie", 5);
example.setSize(12);
console.log(example.privateName);
console.log(example.getName());
console.log(example.privateSize);
console.log(example.getSize());