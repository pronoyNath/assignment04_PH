function printAddress(obj) {
    const keys = ['street', 'house', 'society'];
    const values = [];
  
    for (const key of keys) {
      const propertyValue = obj[key];
      values.push(propertyValue !== undefined ? propertyValue : "__");
    }
  
    console.log(values.join(', '));
  }
  
  let obj = {
    // street:10,
    // house:"15A",
    society:"Earth Perfect"
};
  
  printAddress(obj);
  