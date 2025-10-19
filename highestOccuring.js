/*function highestRank(arr){
    let result = {};
    arr.forEach(element => {
        result[element] = (result[element] || 0) + 1;
    });
    console.log(result)
}
highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12])
highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12, 10])
highestRank([12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10])*/

function highestRank(arr){
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] == arr[i+1]){
            result+=
        }
    }
    console.log(result)
}
highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12])