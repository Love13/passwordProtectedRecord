import { LightningElement, api } from 'lwc';
 
export default class ProtectedRecord extends LightningElement {
    passTerm = '';
    p = 'Copper';
    showRecord = false;
    @api recordId;

    checkPassword(event){
        
        window.clearTimeout(this.delayTimeout);
        let tempTerm = event.target.value;
            console.log(tempTerm)
            // tempTerm = ascii_to_hexa(tempTerm)
            

            console.log(tempTerm)
            console.log(this.p)
            // eslint-disable-next-line @lwc/lwc/no-async-operation
            this.delayTimeout = setTimeout(() => {
                if (tempTerm === this.p) {
                    this.showRecord = true
                    console.dir(this.showRecord)
                } else {
                    this.showRecord = false
                    console.dir(this.showRecord)
                }
		    }, 500);
    }
    

    ascii_to_hexa(str){
        var arr1 = [];
        for (var n = 0, l = str.length; n < l; n ++) {
            var hex = Number(str.charCodeAt(n)).toString(16);
            arr1.push(hex);
        }
        return arr1.join('');
    }
}