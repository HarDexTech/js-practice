const ForEach = () =>{
    let arr = [2, 4, 7, 4, 29, 92, 55];
    arr.forEach(item => {
        console.log(item)
    });

   let number = [1,2, 3, 4, 5]
   number.forEach((param) =>{
    console.log(param*2)
   })

  let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
  numbers.forEach((char) => {if((char%2)===0){console.log(char)}});
  element = numbers.filter(x => (x%2===0)).forEach((element) => console.log(element));

  let names = ["Alice", "Bob", "Charlie"];
  names.forEach((names) => console.log(`Hello ${names}`))
}
ForEach();