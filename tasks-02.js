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

const min = function (list) {
  return Math.min.apply(Math, list);
};

const max = function (list) {
  return Math.max.apply(Math, list);
};

// https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript

function min(arr, toReturn) {
  const minValue = Math.min.apply(Math, arr);
  if (toReturn === "value") {
    return minValue;
  } else {
    return arr.indexOf(minValue);
  }
}


// https://www.codewars.com/kata/beginner-lost-without-a-map

function maps(x) {
  const newMap = x.map((x) => x * 2);
  return newMap;
}
