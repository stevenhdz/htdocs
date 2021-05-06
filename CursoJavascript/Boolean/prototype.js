Boolean.prototype.myColor = function() {
    if (this.valueOf() == true) {
      return "green";
    } else {
      return "red";
    }
  };

  var a = true;
var b = a.myColor();