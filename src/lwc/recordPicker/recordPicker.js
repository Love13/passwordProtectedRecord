import { LightningElement, api, track, wire } from 'lwc';
import { NavigationMixin, CurrentPageReference } from 'lightning/navigation';
import { loadStyle } from 'lightning/platformResourceLoader';
import cardStyle from '@salesforce/resourceUrl/cardStyle';

import getApps from '@salesforce/apex/recordPickerHelper.getApps'
 
export default class RecordPicker extends NavigationMixin(LightningElement) {

    @api recordId
    @api apps

    async connectedCallback(){
        try {
            loadStyle(this, cardStyle );

            const result = await getApps()

                this.apps = result.map(element => {
                
                // // const temp = {}
                // console.log('temp');
                // console.log(temp);

                let percentComplete = 0

                if (element.Section_1__c) {
                    percentComplete ++
                }
                if (element.Section_2__c) {
                    percentComplete ++
                }
                if (element.Section_3__c) {
                    percentComplete ++
                }
                if (element.Section_4__c) {
                    percentComplete ++
                }
                if (element.Section_5__c) {
                    percentComplete ++
                }

                percentComplete = percentComplete * 20

                return Object.assign({}, element, { percent__c: percentComplete });

                
            });
            // console.log(applications);
            
            console.log(JSON.parse(JSON.stringify(this.apps)))

        } catch (e) {

            console.log(e)

        }
        
    }

    handleCardView(event) {
        const id = event.detail

        console.log('caught event')

        this[NavigationMixin.Navigate]({
			type: 'standard__recordPage',
			attributes: {
				recordId: id,
				objectApiName: 'Application__c',
				actionName: 'view',
			},
		});
    }

}