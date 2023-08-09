function findAddress(obj) {
    let key = ['street','house','society'];
    let values = [];
    for(let i=0;i<key.length;i++){
        let propertyValue = obj[key[i]];
        values.push(propertyValue === undefined ? "__":propertyValue);
    }
   let result =  values.join(',');
   return result;
}

let obj = {
    street:10,
    // house:"15A",
    // society:"Earth Perfect"
}
let result = findAddress(obj);
console.log(result);