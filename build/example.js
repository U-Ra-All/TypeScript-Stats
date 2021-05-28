"use strict";
// const add = (a: number, b: number): number => {
//   return a + b;
// }
// add(10, 1);
// add(10, 2);
// add(10, 3);
// class HoldNumber {
//   data: number = 0;
// }
// class HoldString {
//   data: string = '0';
// }
// const holdNumber = new HoldNumber();
// holdNumber.data = 333;
// const holdString = new HoldString();
// holdString.data = 'asdfaf';
var HoldAnything = /** @class */ (function () {
    function HoldAnything() {
    }
    return HoldAnything;
}());
var holdNumber = new HoldAnything();
holdNumber.data = 111;
var holdString = new HoldAnything();
holdString.data = 'sadf';
