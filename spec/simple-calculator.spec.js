let calc = require('../src/simple-calculator-part2');

let calculator = new calc;

describe("string calculator to add numbers", function () {

    it("should add unknown amount of numbers", function () {
        expect(calculator.add(1,2,3,4)).toEqual(10);
    });

});

describe("string calculator to multiply numbers", function () {

    it("should multiply unknown amount of numbers", function () {
        expect(calculator.multiply(1,2,3,4)).toEqual(24);
    });

});


console.log(calculator.add(2,3));
console.log(calculator.add("LAST",3));
calculator.set_slot(1);
console.log(calculator.get_slot(1));
console.log(calculator.add("SLOT_1",2));