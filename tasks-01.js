// https://www.codewars.com/kata/grasshopper-messi-goals-function/train/javascript

function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  let messiGoals = laLigaGoals + copaDelReyGoals + championsLeagueGoals;
  return messiGoals;
}

// https://www.codewars.com/kata/grasshopper-terminal-game-move-function/train/javascript

function move(position, roll) {
  let newPosition = position + roll * 2;
  return newPosition;
}

// https://www.codewars.com/kata/grasshopper-personalized-message/train/javascript

function greet(name, owner) {
  if (name === owner) {
    return "Hello boss";
  } else {
    return "Hello guest";
  }
}

// https://www.codewars.com/kata/keep-hydrated-1/train/javascript

function litres(time) {
  if (time > 1) {
    return Math.floor(time * 0.5);
  } else {
    return 0;
  }
}
