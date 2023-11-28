const {
  STATES,
  OUTPUT,
  updateTransition
} = require('./mod_three_fsm');

describe('Mod Three State Transition Tests', () => {
  test('Valid input string "110"', () => {
    const inputString = '110';
    const expectedOutput = OUTPUT[STATES.S0];
    expect(updateTransition(inputString)).toBe(expectedOutput);
  });

  test('Valid input string "1010"', () => {
    const inputString = '1010';
    const expectedOutput = OUTPUT[STATES.S1];
    expect(updateTransition(inputString)).toEqual(expectedOutput);
  });

  test('Invalid input string "ABC"', () => {
    const inputString = 'ABC';
    const expectedOutput = undefined;
    expect(updateTransition(inputString)).toEqual(expectedOutput);
  });

  test('Empty input string', () => {
    const inputString = '';
    const expectedOutput = OUTPUT[STATES.S0];
    expect(updateTransition(inputString)).toEqual(expectedOutput);
  });

  test('Input string leading to initial state', () => {
    const inputString = '000';
    const expectedOutput = OUTPUT[STATES.S0];
    expect(updateTransition(inputString)).toEqual(expectedOutput);
  });

  test('Input string leading to final state', () => {
    const inputString = '111111';
    const expectedOutput = OUTPUT[STATES.S0];
    expect(updateTransition(inputString)).toEqual(expectedOutput);
  });

  test('Input string leading to intermediate state', () => {
    const inputString = '101010';
    const expectedOutput = OUTPUT[STATES.S0];
    expect(updateTransition(inputString)).toEqual(expectedOutput);
  });
});
