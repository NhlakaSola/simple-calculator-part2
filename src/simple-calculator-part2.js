
module.exports = class Calculator{

    constructor () {
        this.slot = [];

    }
    
    add(){
        
        var summed = 0 ;
        for(var i = 0;i<arguments.length;i++){
           if (arguments[i] == "LAST") {
                summed += this.last_value;               
           }else if (arguments[i] == "SLOT_") {
            console.log(arguments[i]);
            let b = parseInt(arguments[arguments.length-1]);
            summed += this.get_slot[b];
            
        }else{
               summed += arguments[i];
           }

        }
        this.last_value = summed;
       
        return summed;
    }

    multiply(){
        var product = 1 ;
        for(var i = 0;i<arguments.length;i++){
            if (arguments[i]== "LAST") {
                 product *= this.last_value;               
            }else if (arguments[i] == "SLOT_") {
                console.log(arguments[i]);
                let b = parseInt(arguments[arguments.length-1]);
                product *= this.get_slot[b];
                
            }else{
                product *= arguments[i];
            }
 
         }
        this.last_value = product;
        
        return product;
    }
    
    last(){

        this.slot.push(this.last_value);
        return  this.last_value;
        
    }

    set_slot(slot_number){
        this.slot[slot_number - 1]; 
        
    }

    get_slot(slot_number){
        return this.slot[slot_number-1];
    }

}
