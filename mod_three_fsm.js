const STATES = {S0: 'S0', S1: 'S1', S2: 'S2'};
const OUTPUT = {S0: 0, S1: 1, S2: 2};
const BINARY_NUMBERS = {ZERO: 0, ONE: 1};
const TRANSITIONS = {
  [STATES.S0]: {[BINARY_NUMBERS.ZERO]: STATES.S0, [BINARY_NUMBERS.ONE]: STATES.S1},
  [STATES.S1]: {[BINARY_NUMBERS.ZERO]: STATES.S2, [BINARY_NUMBERS.ONE]: STATES.S0},
  [STATES.S2]: {[BINARY_NUMBERS.ZERO]: STATES.S1, [BINARY_NUMBERS.ONE]: STATES.S2}
}


const updateTransition = (inputString) => {
  let currentState = STATES.S0;

  for (const character of inputString) {
    if (TRANSITIONS[currentState][character]) {
      currentState = TRANSITIONS[currentState][character];
    } else {
      console.log('Invalid state transition');
      return;
    }
  }

  return OUTPUT[currentState];

}

module.exports = { STATES, OUTPUT, BINARY_NUMBERS, TRANSITIONS, updateTransition };


