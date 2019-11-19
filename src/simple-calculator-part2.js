class Calculator{

    
    add(){
        var summed = 0 ;
        for(var i = 0;i<arguments.length;i++){
            summed += arguments[i];
        }return summed;
    }

    multiply(){
        var product = 1 ;
        for(var i = 0;i<arguments.length;i++){
            product *= arguments[i];
        }return product;
    } 

}
 
let calculator_instance = new Calculator;

console.log(calculator_instance.add(3,5));
console.log(calculator_instance.add(3,5,2));
console.log(calculator_instance.multiply(30,2));
