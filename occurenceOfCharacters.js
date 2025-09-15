const occurenceOfCharacters = (param, char) =>{
     param = param.toLowerCase();
     char = char.toLowerCase();
     let splittedParam = param.split('');
     let count = 0;
     for (let index = 0; index < splittedParam.length; index++) {
          if(char === splittedParam[index]){
               count += 1
          }
     }
     console.log(`The number of ${char} in ${param} is ${count}`);
}
occurenceOfCharacters('Ayomide', 'a');