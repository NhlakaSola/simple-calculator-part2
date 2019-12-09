module.exports = class Calculator{

    constructor () {
        this.slots_array = [];
        this.last_value = 0;
    }
    
    add(){
		var summed = 0 ;
		for(var i = 0;i<arguments.length;i++){
			if (typeof arguments[i] == 'string') {
				if (arguments[i] == "LAST") {
					summed += this.last_value;
				}else{
					let str = /\d/g;
					let numberOfSlot = str.exec(arguments[i]);
					summed += this.slots_array[parseInt(numberOfSlot[0]) - 1];
				}
			}else{
				summed += arguments[i];
			}
		}
		this.last_value = summed;
		return summed;
	}

    multiply(){
		var product = 1 ;
		for (let i = 0; i < arguments.length; i++) {
			if (typeof arguments[i] == 'string') {
				if (arguments[i] == "LAST") {
					product *= this.last_value;
				}else {
					let str = /\d/g;
					let numberOfSlot = str.exec(arguments[i]);
					product *= this.slots_array[parseInt(numberOfSlot[0]) - 1];
				}
			}else {
				product *= arguments[i];		
			}
		}
		this.last_value = product;
		return product;
	}
    
    last(){
        return this.last_value;
    }

    set_slot(slot_number){
        this.slots_array.push(this.last_value);
    }

    get_slot(slot_number){
        return this.slots_array[slot_number-1];
    }

}
