function matchFinder(string1, string2) {
    if(typeof string1 !== 'string' || typeof string2 !== 'string'){
        let x = "Alert! Please Enter strings.";
        return x;
    }
    else{
        if(string1.includes(string2)){
            return true;
        }
        else{
            return false;
        }
    }
}

let x = matchFinder(true, "76");
console.log(x);