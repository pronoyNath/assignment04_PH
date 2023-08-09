function sortMaker(arr) {
    if(arr.length <= 2){
        if(arr[0] < 0 || arr[1] < 0){
            let x = "Invalid Input"
            return x;
        }
       else if(arr[0] === arr[1]){
        let x = "equal";
        return x;
       }

       let max = arr[0];
       if(arr[1] > max){
           let temp = arr[1];
           arr[1] = arr[0];
           arr[0] = temp;
       }
       return arr;
       }

       else{
        let x = "Alert! Array Length is more than 2."
        return x;
       }

}

let arr = [-4,-2];
let result = sortMaker(arr);
console.log(result);