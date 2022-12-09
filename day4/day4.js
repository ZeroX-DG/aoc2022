const readInput = () => require('readline')
  .createInterface({ input: require('fs').createReadStream('input.txt') });

const puzzle1 = () => {
  let totalOverlaps = 0;
  readInput()
    .on('line', line => {
      const [range1, range2] = line.split(',').map(r => r.split('-').map(x => +x));
      const isOverlaps = (a, b) => a[0] <= b[0] && a[1] >= b[1];
      totalOverlaps += isOverlaps(range1, range2) || isOverlaps(range2, range1) ? 1 : 0;
    })
    .on('close', () => console.log(totalOverlaps));
}

const puzzle2 = () => {
  let totalOverlaps = 0;
  readInput()
    .on('line', line => {
      const [range1, range2] = line.split(',').map(r => r.split('-').map(x => +x));
      const isOverlaps = (a, b) => a[0] <= b[1] && b[0] <= a[1];
      totalOverlaps += isOverlaps(range1, range2) || isOverlaps(range2, range1) ? 1 : 0;
    })
    .on('close', () => console.log(totalOverlaps));
}

puzzle1();
puzzle2();
