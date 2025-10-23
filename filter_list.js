function filter_list(l) {
  const result = [];
  for (let i = 0; i < l.length; i++) {
    var num = l[i];
    if (typeof num === "number") {
      result.push(num);
    }
  }
  return result;
}
console.log(filter_list([1, 2, "a", "b", 3, "5", 7, 9, "3"]));


// filter list
const filter = (arr, value) => {
  const result = [];

  if (arr.includes(value)) {
    for (let i = 0; i < arr.length; i++) {
      if(arr[i] !== value){
        result.push(arr[i]);
      }
    }
    return result;
  }
  else{
    return arr;
  }
}
console.log(filter([1, 2, "a", "b", 3, "5", 7, 9, "3", 4], 9));