
function Welcome(name) {
    this.name = name;
}

Welcome.prototype.sayHello = function() {
   return 'Hello, ' + this.name + '!';
}
var welcome = new Welcome('Shyam');
var output = welcome.sayHello();
console.log(output);