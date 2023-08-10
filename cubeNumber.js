function cubeNumber(number) {
  if (typeof number !== "number") {
    let x = "This is not a number";
    return x;
  } 
  else if (number > 0) {
    let cube = Math.pow(number, 3);
    return cube;
  } 
  else {
    let x = "Invalid";
    return x;
  }
}

let result = cubeNumber(true);
console.log(result);
