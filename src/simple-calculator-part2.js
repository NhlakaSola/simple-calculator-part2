module.exports = class Calculator{
    constructor () {
        this.slots_array = [];
        this.last_value = 0;
    }
    
    add(){
		let summed = 0 ;
		for(var i = 0;i<arguments.length;i++){
			if (typeof arguments[i] == 'string') {
				if (arguments[i] == "LAST") {
					summed += this.last();
				}else{
					let str = /\d/g;
					let numberOfSlot = str.exec(arguments[i]);
		
					summed += this.get_slot(parseInt(numberOfSlot[0]));
				}
			}else{
				summed += arguments[i];
			}
		}
		this.last_value = summed;
		return summed;
	}

    multiply(){
		let product = 1 ;
		for (let i = 0; i < arguments.length; i++) {
			if (typeof arguments[i] == 'string') {
				if (arguments[i] == "LAST") {
					product *= this.last();
				}else {
					let str = /\d/g;
					let numberOfSlot = str.exec(arguments[i]);
					product *= this.get_slot(parseInt(numberOfSlot[0]));
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