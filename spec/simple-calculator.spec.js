let calc = require('../src/simple-calculator-part2');
let calculator = new calc;

describe("simple calculator", function () {

    it("should add unknown amount of numbers", function () {
        expect(calculator.add(1,2,3,4)).toBe(10);
    });


    it("should multiply unknown amount of numbers", function () {
        expect(calculator.multiply(1,2,3,4)).toBe(24);
    });
    
    it("should multiply unknown amount of numbers", function () {
        expect(calculator.multiply(1,2,3,4)).toBe(24);
    });

    it("should return the last value", function () {
        calculator.add(1,2);
        expect(calculator.last()).toBe(3);
    });

    it("should be able to use last value as a string", function () {
        calculator.add(1,2);
        expect(calculator.add("LAST", 3)).toBe(6);
        
    });

    it('sets slots and gets slots', function(){
        calculator.add(1,2);
        calculator.set_slot(1);
        expect(calculator.get_slot(1)).toBe(3);
    })

    it("should be able to use slots as strings", function () {
        calculator.add(1,2);
        calculator.set_slot(1);
        expect(calculator.add("SLOT_1",3)).toBe(6);

    });

});

