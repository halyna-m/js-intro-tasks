// https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript

function stringToArray(string) {
  let array = string.split(" ");
  return array;
}


// https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript

function DNAtoRNA(dna) {
  return dna.replace(/T/g, "U"); 
}


// https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript

const min = (list) => Math.min(...list);
const max = (list) => Math.max(...list);

// https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript

function min(arr, toReturn) {
  return (toReturn == 'value') ? Math.min(...arr) : arr.indexOf( Math.min(...arr) );
}

// https://www.codewars.com/kata/beginner-lost-without-a-map

function maps(x) {
  const newMap = x.map((x) => x * 2);
  return newMap;
}
