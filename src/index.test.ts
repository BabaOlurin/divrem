import { divrem } from "./index";

let validTestCases = [
    [33, 25, 1],
    [12, 13, 0],
    [-8, 3, 2],
    [8, -3, 2]
];

for (let i =0; i < validTestCases.length; i++) {

    let num = validTestCases[i][0];
    let divisor = validTestCases[i][1];
    let expectedCount = validTestCases[i][2];
    let remainder = num % divisor;

    test(`dividing ${num} by ${divisor} gives a division count of ${expectedCount}.`, () => {
        let result = divrem(num, divisor);
        expect(result.count).toBe(expectedCount);
    });

    test(`dividing ${num} by ${divisor} gives a remainder value of ${remainder}.`, () => {
        let result = divrem(num, divisor);
        expect(result.rem).toBe(remainder);
    });
}

test('throws if dividend is not a valid number.', () => {
    expect(() => {
        divrem(parseFloat("a"), 1);
    }).toThrow();
});

test('throws if dividend is infinity.', () => {
    expect(() => {
        divrem(Infinity, 1);
    }).toThrow();
});

test('throws if divisor is zero.', () => {
    expect(() => {
        divrem(2, 0);
    }).toThrow();
});

test('throws if divisor is not a valid number.', () => {
    expect(() => {
        divrem(1, parseFloat("X"));
    }).toThrow();
});

test('throws if divisor is infinity.', () => {
    expect(() => {
        divrem(4, Infinity);
    }).toThrow();
});