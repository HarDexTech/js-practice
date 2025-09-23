const arrayMap = () =>{
    const arr = [8, 26, 16,  5, 12, 28,2,  5, 14, 69, 40,  2,55, 133, 2,  3, 28, 46, 45, 3, 10, 53, 112, 4, 7, 4, 29, 92, 55, 2, 4, 2, 21, 66, 14];
    const ten = arr.map((char) => Math.floor(Math.random()*char)).filter(x => (x >= arr.length)).forEach((any) => {console.log(`Numbers are ${any}`)})
    console.log(ten);
}
arrayMap();