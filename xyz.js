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
console.log(cubeNumber(5));
function matchFinder(string1, string2) {
  if (typeof string1 !== 'string' || typeof string2 !== 'string') {
    let x = "Alert! Please Enter strings.";
    return x;
  }
  else {
    if (string1.includes(string2)) {
      return true;
    }
    else {
      return false;
    }
  }
}
console.log(matchFinder("pronoy","pro"));
function sortMaker(arr) {
  if (arr.length <= 2) {
    if (arr[0] < 0 || arr[1] < 0) {
      let x = "Invalid Input"
      return x;
    }
    else if (arr[0] === arr[1]) {
      let x = "equal";
      return x;
    }
    let max = arr[0];
    if (arr[1] > max) {
      let temp = arr[1];
      arr[1] = arr[0];
      arr[0] = temp;
    }
    return arr;
  }
  else {
    let x = "Alert! Array Length is more than 2."
    return x;
  }
}
console.log(sortMaker([3,5]));
function findAddress(obj) {
  let key = ['street', 'house', 'society'];
  let values = [];
  for (let i = 0; i < key.length; i++) {
    let propertyValue = obj[key[i]];
    values.push(propertyValue === undefined ? "__" : propertyValue);
  }
  let result = values.join(',');
  return result;
}
function canPay(changeArray, totalDue) {
  if (changeArray.length === 0 || Array.isArray(changeArray) === false) {
    let x = "Alert! Empty array";
    return x;
  }
  let totalChange = 0;
  for (let i = 0; i < changeArray.length; i++) {
    totalChange += changeArray[i];
  }
  if (totalChange >= totalDue) {
    return true;
  }
  return false;
}
console.log(canPay([3,5,3],10));