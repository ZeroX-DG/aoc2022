const readInput = () => require('readline')
  .createInterface({ input: require('fs').createReadStream('input.txt') });

const puzzle1 = () => {
  let maxCalories = 0, currentCalories = 0;

  readInput()
    .on('line', line => {
      maxCalories = Math.max(currentCalories, maxCalories);
      currentCalories = !line ? 0 : currentCalories + +line;
    })
    .on('close', () => {
      console.log(maxCalories);
    });
}

const puzzle2 = () => {
  let calories = [], currentCalories = 0;

  readInput()
    .on('line', line => {
      !line && calories.push(currentCalories);
      currentCalories = !line ? 0 : currentCalories + +line;
    })
    .on('close', () => {
      calories.sort();
      console.log(calories.at(-1) + calories.at(-2) + calories.at(-3));
    });
}

puzzle1();
puzzle2();
