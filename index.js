#!/usr/bin/env node

var args = process.argv.slice(2);
var sideCount = parseInt(args[0]);
var rollCount = parseInt(args[1]);

if (Number.isInteger(sideCount) && Number.isInteger(rollCount)) {
  if ([4, 6, 8, 10, 12, 20, 100].indexOf(sideCount) !== -1) {
    console.log('roll ' + sideCount + ' side dice for ' + rollCount + ' times.');
    for (var i = 0; i < rollCount; i++) {
      console.log(Math.ceil(Math.random() * sideCount));
    }
  } else {
    console.log('not a D20 dice (D4, D6, D8, D10, D12, D20, D100)');
  }
} else {
  console.log('to use: ./dice sideCount rollCount');
}
