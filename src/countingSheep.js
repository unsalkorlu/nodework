
var countSheep = function (num){
	var result = "";
  for (var i = 1; i <= num; i++) {
	  result = result + i + " sheep...";
  }
  return result;
}

console.log(countSheep(4));