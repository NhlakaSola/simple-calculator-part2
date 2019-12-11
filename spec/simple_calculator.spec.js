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
        calculator.add(1,2) //should return 3
        calculator.set_slot(1)
        calculator.get_slot(1) //should return 3
        calculator.add(10,20) //should return 30, updates last value to 30
        calculator.set_slot(2)
        calculator.get_slot(2) //should return 30
        calculator.add(100,200)//should return 300, updates last value to 300
        calculator.get_slot(1) // should return 3
        calculator.get_slot(2) // should return 30
        expect(calculator.last()).toBe(300);
    });

    it("add and multiply function should allow LAST as a parameter", function () {
        calculator.add(1,2); //should return 3
        expect(calculator.add("LAST", 3)).toBe(6);
        expect(calculator.multiply("LAST",2)).toBe(12);
        
    });

    it('sets slots and gets slots', function(){
        calculator.add(1,2); //should return 3
        calculator.set_slot(1);
        expect(calculator.get_slot(1)).toBe(3);
    })

    it("should be able to use slots as strings", function () {
        calculator.add(1,2); //should return 3
        calculator.set_slot(1);
        expect(calculator.add("SLOT_1",3)).toBe(6);

    });

});

