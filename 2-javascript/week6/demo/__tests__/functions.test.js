const {  sayHello, sum, isEven, isTruthy} = require('../src/functions')

test('sayHello returns Hello!', () => {
    expect(sayHello()).toBe("Hello!")
    expect(sayHello()).not.toBe("Goodbye!")
});   

test('sum returns the sum of two numbers', () => {
    expect(sum(1, 2)).toBe(3)
    expect(sum(1, 2)).not.toBe(4)
    expect(sum(1, 2)).not.toBe(5)
});

test('isTruthy returns true for truthy values', () => {
    expect(isTruthy(true)).toBe(true)
    expect(isTruthy(0)).toBe(false)
    expect(isTruthy({})).toBe(true)
    expect(isTruthy([])).toBe(true)
});

test('isEven returns true for even numbers', () => {
    expect(isEven(2)).toBe(true)
    expect(isEven(3)).toBe(false)
    expect(isEven(0)).toBe(true)
    expect(isEven(100)).toBe(true)
});

// to run this test, run the following command in the terminal:
// npm test
