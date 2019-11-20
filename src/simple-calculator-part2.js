module.exports = class Calculator{
    
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

    multiply(){
        var product = 1 ;
        for(var i = 0;i<arguments.length;i++){
            if (arguments[i] == "LAST") {
                 product *= this.last_value;               
            }else{
                product *= arguments[i];
            }
 
         }
        this.last_value = product;
        return product;
    }
    
    last(){
        return  this.last_value;
    }

}
 
