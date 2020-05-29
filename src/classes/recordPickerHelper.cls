public without sharing class recordPickerHelper {

    @AuraEnabled(cacheable=true)
    public static List<Application__c> getApps(){
        return [
            SELECT Id, Name, Account__c, Account__r.Name, Contact__c, Contact__r.Name, 
                Section_1__c, Section_2__c, Section_3__c, Section_4__c, Section_5__c, CreatedDate, Status__c
            FROM Application__c
            ORDER BY CreatedDate
        ];
    }

}