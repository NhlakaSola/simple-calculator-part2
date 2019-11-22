module.exports = class Calculator{

    constructor () {
        this.slot = [];

    }
    
    add(){
        
        var summed = 0 ;
        for(var i = 0;i<arguments.length;i++){
           if (arguments[i] == "LAST") {
                summed += this.last_value;               
           }else{
               summed += arguments[i];
           }

        }
        this.last_value = summed;
       
        return summed;
    }

    multiply(...str){
        var product = 1 ;
        for(var i = 0;i<str.length;i++){
            if (str[i]== "LAST") {
                 product *= this.last_value;               
            }else if (str.includes('SLOT_')) {
                let b = parseInt(str[str.length-1]);
                product *= this.get_slot[b];
                
            }else{
                product *= str[i];
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
 
