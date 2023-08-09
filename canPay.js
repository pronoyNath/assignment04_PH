function canPay(changeArray, totalDue) {
    if(changeArray.length === 0 || Array.isArray(changeArray) === false){
        let x = "Alert! Empty array";
        return x;
    }

    let totalChange = 0;
    for(let i=0;i<changeArray.length;i++){
        totalChange += changeArray[i];
    }
    if(totalChange >= totalDue){
        return true;
    }
    return false;
}


let changeArray = [2,6,4];
let result = canPay("gh",10);
console.log(result);
