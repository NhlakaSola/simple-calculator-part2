let calc = require('../src/simple-calculator-part2');

let calculator = new calc;

describe("simple calculator", function () {

    it("should add unknown amount of numbers", function () {
        expect(calculator.add(1,2,3,4)).toEqual(10);
    });


    it("should multiply unknown amount of numbers", function () {
        expect(calculator.multiply(1,2,3,4)).toEqual(24);
    });
    
    it("should multiply unknown amount of numbers", function () {
        expect(calculator.multiply(1,2,3,4)).toEqual(24);
    });

    


});


console.log(calculator.add(2,3));
console.log(calculator.add("LAST",3));
calculator.set_slot(1);
console.log(calculator.get_slot(1));
