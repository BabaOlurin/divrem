export function divrem(dividend: number, divisor: number): { count: number, quotient: number, rem: number, result: number} {    
    let isNotValidNumber = (num) => typeof num !== 'number' || isNaN(num) || !isFinite(num);    
    if (isNotValidNumber(dividend)) throw new Error("Dividend must be a valid number less than infinity.");
    if (isNotValidNumber(divisor)) throw new Error("Divisor must be a valid number less than infinity.");    
    if (divisor == 0) throw new Error("divisor cannot be 0");

    let result = dividend / divisor;
    let count = Math.floor(Math.abs(result));
    let quotient = count * (result / Math.abs(result));
    let rem = dividend % divisor

    return {count, quotient, rem, result};
}