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

    it("should be able to remember the last value", function () {
        expect(calculator.add("LAST",2)).toEqual();
    });  

    it("should be able to use last in other functions", function () {
        expect(calculator.multiply("LAST",2)).toEqual();
    });  
    

});


console.log(calculator.add(2,3));
console.log(calculator.add("LAST",3));
