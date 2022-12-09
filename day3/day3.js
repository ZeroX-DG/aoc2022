const readInput = () => require('readline')
  .createInterface({ input: require('fs').createReadStream('input.txt') });

const getPriority = (item) => (p = item.charCodeAt() - 96, p < 0 ? p + 58 : p);

const puzzle1 = () => {
  let totalPiorities = 0;
  readInput()
    .on('line', line => {
      const [first, second] = (mid = line.length / 2, [line.slice(0, mid).split(''), line.slice(mid).split('')]);
      const intersections = [...new Set(first.filter(i => second.includes(i)))];
      const priorities = intersections.map(getPriority).reduce((a, b) => a + b, 0);
      totalPiorities += priorities;
    })
    .on('close', () => {
      console.log(totalPiorities);
    });
}

const puzzle2 = () => {
  let totalPiorities = 0;

  let group = [];

  readInput()
    .on('line', line => {
      group.push(line.split(''));
      totalPiorities += group.length != 3 ? 0 : getPriority(group[0].find(i => group[1].includes(i) && group[2].includes(i)));
      group.length == 3 && (group = []);
    })
    .on('close', () => {
      console.log(totalPiorities);
    });
}

puzzle1();
puzzle2();
