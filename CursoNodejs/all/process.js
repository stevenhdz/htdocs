process.argv.forEach((val, index) => {
    console.log(`${index}: ${val}`);
  });

  //node process-args.js one two=three four

//   0: /usr/local/bin/node
//   1: /Users/mjr/work/node/process-args.js
//   2: one
//   3: two=three
//   4: four
