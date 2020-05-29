import { LightningElement, api, track } from 'lwc';
 
export default class RecordPickerCard extends LightningElement {

    @api app
    @track isDenied

    renderedCallback(){
        this.isDenied = this.app.Status__c == 'Denied' ? true : false
        console.log('this is denied');
        console.log(this.isDenied);
       
    }

    handleOpenRecordClick() {
        const selectEvent = new CustomEvent("applicationview", {
            detail: this.app.Id
        });
        this.dispatchEvent(selectEvent);

        console.log('sent event', this.app.Id)
    }

}