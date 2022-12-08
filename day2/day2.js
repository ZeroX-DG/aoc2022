const readInput = () => require('readline')
  .createInterface({ input: require('fs').createReadStream('input.txt') });

// A = X = Rock     = 1
// B = Y = Paper    = 2
// C = Z = Scissors = 3
//
// Won = 6
// Draw = 3
// Lost = 0

const getChoiceScore = choice => choice.charCodeAt() - (['A', 'B', 'C'].includes(choice) ? 64 : 87);

const puzzle1 = () => {
  let totalScore = 0;
  readInput()
    .on('line', line => {
      const [opponent, you] = line.split(' ').map(getChoiceScore);
      const matchResult = you - opponent;
      const matchScore = [1, -2].includes(matchResult) ? 6 : [-1, 2].includes(matchResult) ? 0 : 3;
      totalScore += matchScore + you;
    })
    .on('close', () => {
      console.log(totalScore);
    });
}

// X = lose
// Y = draw
// Z = win
const puzzle2 = () => {
  let totalScore = 0;
  readInput()
    .on('line', line => {
      const [opponent, mustEndWith] = line.split(' ').map(getChoiceScore);
      const you = mustEndWith == 2
        ? opponent
        : mustEndWith == 3
          ? opponent % 3 + 1
          : opponent - 1 == 0 ? 3 : opponent - 1;
      const matchResult = you - opponent;
      const matchScore = [1, -2].includes(matchResult) ? 6 : [-1, 2].includes(matchResult) ? 0 : 3;
      totalScore += matchScore + you;
    })
    .on('close', () => {
      console.log(totalScore);
    });
}

puzzle1();
puzzle2();
