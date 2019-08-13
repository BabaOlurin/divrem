# divrem [![Build Status](https://travis-ci.org/BabaOlurin/divrem.svg?branch=master)](https://travis-ci.org/BabaOlurin/divrem)
Calculates the division result, divide count, quotient and remainder of two numbers.
## Installation
```javascript
npm install --save divrem
```
## Usage
```javascript
import { divrem } from "divrem";
```
or
```javascript
const divrem = require("divrem").divrem;
```
Using divrem between two divisible numbers
```javascript
divrem(4, 2);
//{ count: 2, quotient: 2, rem: 0, result: 2 }
divrem(6, 4);
//{ count: 1, quotient: 1, rem: 2, result: 1.5 }
divrem(17, 11);
//{ count: 1, quotient: 1, rem: 6, result: 1.5454545454545454 }
divrem(2.3, 1.4);
//{ count: 1, quotient: 1, rem: 0.8999999999999999, result: 1.6428571428571428 }
divrem(-7,4);
//{ count: 1, quotient: -1, rem: -3, result: -1.75 }
```