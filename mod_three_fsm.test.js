const {
  STATES,
  OUTPUT,
  updateTransition
} = require('./mod_three_fsm');

describe('Mod Three State Tests', () => {
  test('Valid input string "110"', () => {
    const inputString = '110';
    const expectedOutput = OUTPUT[STATES.S0];
    expect(updateTransition(inputString)).toBe(expectedOutput);
  });

  test('Valid input string "1010"', () => {
    const inputString = '1010';
    const expectedOutput = OUTPUT[STATES.S1];
    expect(updateTransition(inputString)).toBe(expectedOutput);
  });

  test('Invalid input string "AGDBRHGF"', () => {
    const inputString = 'AGDBRHGF';
    const expectedOutput = undefined;
    expect(updateTransition(inputString)).toBe(expectedOutput);
  });

  test('Empty input string', () => {
    const inputString = '';
    const expectedOutput = OUTPUT[STATES.S0];
    expect(updateTransition(inputString)).toBe(expectedOutput);
  });

  test('Input string leading to initial state', () => {
    const inputString = '000';
    const expectedOutput = OUTPUT[STATES.S0];
    expect(updateTransition(inputString)).toBe(expectedOutput);
  });

  test('Input string leading to final state', () => {
    const inputString = '111111';
    const expectedOutput = OUTPUT[STATES.S0];
    expect(updateTransition(inputString)).toBe(expectedOutput);
  });
});
