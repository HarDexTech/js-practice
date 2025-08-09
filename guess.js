
      const firstUser = parseInt(prompt("Player one number:"));
      const secondUser = parseInt(prompt("Player two number:"));
      const computer = Math.floor(Math.random() * 2);

      console.log(`Player one number is ${firstUser}`);
      console.log(`Player two number is ${secondUser}`);
      console.log(`Computer number is ${computer}`);

      if (
        (firstUser !== 0 && firstUser !== 1) ||
        (secondUser !== 0 && secondUser !== 1)
      ) {
        console.log("Invalid Input");
      } else {
        if (firstUser === computer && secondUser === computer) {
          console.log("Tie");
        } else if (firstUser === computer && secondUser !== computer) {
          console.log(`Player one wins`);
        } else if (firstUser !== computer && secondUser === computer) {
          console.log(`Player two wins`);
        } else {
          console.log("Try Again");
        }
      }