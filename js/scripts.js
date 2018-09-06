var bmi = function(x, y) {
  return x / (y * y);
};

var x = parseInt(prompt("Enter your mass (kg):"));
var y = parseInt(prompt("Enter your height (m):"));
var result = bmi(x, y);

alert(result);
