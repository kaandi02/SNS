import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTabsModule} from '@angular/material/tabs';
import { Clipboard } from '@angular/cdk/clipboard';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatSidenavModule, MatTabsModule, CommonModule, MatIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(private clipboard: Clipboard){}
  title = 'SNS-Builder';
  formData = {
    ooid:'',
    void:'',
    doid:'',
    vsid:'',
    dsid:'',
    directory:'',
    assetId:''
  }
  show_json = false;

  CurrDate = new Date();
  month = this.CurrDate.getMonth()+1;
  date2 = this.CurrDate.getDate()+2;
  date = "0" + this.CurrDate.getDate();
  date3 = "0" + this.date2;
  todayDate = this.CurrDate.getUTCFullYear()+"-"+this.month+"-"+this.date.slice(-2);
  generatedAt = this.CurrDate.getUTCFullYear()+"-"+this.month+"-"+this.date.slice(-2)+"T10:40:22.755488303+01:00";
  activationDate = this.CurrDate.getUTCFullYear()+"-"+this.month+"-"+this.date.slice(-2)+"T11:01:55+01:00";
  ceaseDate = this.CurrDate.getUTCFullYear()+"-"+this.month+"-"+this.date.slice(-2)+"T14:37:21Z";
  DFSDate = this.CurrDate.getUTCFullYear()+"-"+this.month+"-"+this.date.slice(-2);
  deliveryDate = this.CurrDate.getUTCFullYear()+"-"+this.month+"-"+this.date3.slice(-2);

  BOS_Validation='';
  Data_Accepted = '';
  Voice_Accepted = '';
  Data_Activated = '';
  Voice_Activated = '';
  Data_Completed = '';
  Voice_Completed = '';
  Sent_to_FH = '';
  Accepted_By_FH = '';
  Processing_By_FH = '';
  Dispatched = '';
  Delivered = '';
  UnDelivered = '';
  Cease_Data_Warning = '';
  Cease_Data_Completed = ''
  Cease_Voice_Warning = '';
  Cease_Voice_Completed = '';
  Return_received = '';

  manipulateJSON(){
    console.log(this.date3);
    this.BOS_Validation = JSON.stringify({
      "id" : "cde8e672-e92b-4311-b2f7-8b53ecfec7aa",
      "correlationId" : "ID-bos-notification-service-bosd62-0-0-9-1690556292-6477954f8gl692-1690556872354-0-181",
      "generatedAt" : this.generatedAt,
      "userId" : "middleware",
      "type" : "VOICE_AND_DATA_ORDER_VALIDATED",
      "providerId" : "SNS",
      "operatorOrderId" : this.formData.ooid,
      "providerOrderId" : this.formData.doid
    },null,'\n')
    
    this.Data_Accepted = JSON.stringify({
      "id" : "faa4d3f5-ee7a-4cea-bfad-4952af63f201",
      "correlationId" : "ID-bos-notification-service-bosd62-0-0-9-1690556292-6477954f8gl692-1690556872354-0-183",
      "generatedAt" : this.generatedAt,
      "userId" : "middleware",
      "type" : "DATA_ACCEPTED",
      "providerId" : "SNS",
      "operatorOrderId" : this.formData.ooid,
      "expectedActivationDate" : this.todayDate,
      "providerOrderId" : this.formData.doid,
      "serviceId" : this.formData.dsid
    },null,'\n')
  
    this.Voice_Accepted = JSON.stringify({
      "id" : "9e43da03-955c-4555-8db6-74394cdc2ff0",
      "correlationId" : "ID-bos-notification-service-bosd62-0-0-9-1690556292-6477954f8gl692-1690556872354-0-183",
      "generatedAt" : this.generatedAt,
      "userId" : "middleware",
      "type" : "VOICE_ACCEPTED",
      "providerId" : "SNS",
      "operatorOrderId" : this.formData.ooid,
      "expectedActivationDate" : this.todayDate,
      "providerOrderId" : this.formData.void,
      "expectedDirectoryNumber" : this.formData.directory,
      "serviceId" : this.formData.vsid
    },null,'\n')
  
    this.Data_Activated = JSON.stringify({
      "id" : "79ccb9a7-9ac2-4ff1-a0d2-835fa1933d6d",
      "correlationId" : "ID-bos-notification-service-bosd62-0-0-9-1690556292-6477954f8gl692-1690556872354-0-186",
      "generatedAt" : this.generatedAt,
      "userId" : "middleware",
      "type" : "DATA_ACTIVATED",
      "providerId" : "SNS",
      "operatorOrderId" : this.formData.ooid,
      "providerOrderId" : this.formData.doid,
      "serviceId" : this.formData.dsid,
      "activationDate" : this.activationDate
    },null,'\n')
  
    this.Voice_Activated = JSON.stringify({
      "id" : "90deb7f3-0ee2-4e76-939c-a956e7eb21da",
      "correlationId" : "ID-bos-notification-service-bosd62-0-0-9-1690556292-6477954f8gl692-1690556872354-0-188",
      "generatedAt" : this.generatedAt,
      "userId" : "middleware",
      "type" : "VOICE_ACTIVATED",
      "providerId" : "SNS",
      "operatorOrderId" : this.formData.ooid,
      "providerOrderId" : this.formData.void,
      "serviceId" : this.formData.vsid,
      "activationDate" : this.activationDate,
      "directoryNumber" : this.formData.directory
    },null,'\n')
  
    this.Data_Completed = JSON.stringify({
      "id" : "20f08bb9-4d20-4bef-bcaa-6f486ef0c8b0",
      "correlationId" : "ID-bos-notification-service-bosd62-0-0-9-1690556292-6477954f8gl692-1690556872354-0-190",
      "generatedAt" : this.generatedAt,
      "userId" : "middleware",
      "type" : "DATA_COMPLETED",
      "providerId" : "SNS",
      "operatorOrderId" : this.formData.ooid,
      "providerOrderId" : this.formData.doid,
      "serviceId" : this.formData.dsid,
      "activationDate" : this.activationDate
    },null,'\n')
  
    this.Voice_Completed = JSON.stringify({
      "id" : "df2817d8-79a0-4ec4-905b-05567ea123f2",
      "correlationId" : "ID-bos-notification-service-bosd62-0-0-9-1690556292-6477954f8gl692-1690556872354-0-190",
      "generatedAt" : this.generatedAt,
      "userId" : "middleware",
      "type" : "VOICE_COMPLETED",
      "providerId" : "SNS",
      "operatorOrderId" : this.formData.ooid,
      "providerOrderId" : this.formData.void,
      "serviceId" : this.formData.vsid,
      "activationDate" : this.activationDate,
    },null,'\n')

    this.Cease_Data_Warning = JSON.stringify({
      "id" : "ac2d1c58-c21f-4348-9dde-94f0e2ce10ea",
      "correlationId" : "ID-bos-notification-service-bosd62-0-0-9-1690556292-6477954f8gl692-1690556872354-0-213",
      "generatedAt" : this.generatedAt,
      "userId" : "middleware",
      "type" : "UNSOLICITED_CEASE_WARNING_RECEIVED",
      "providerId" : "SNS",
      "providerOrderId" : this.formData.doid,
      "serviceId" : this.formData.dsid,
      "serviceType" : "data",
      "ceaseDate" : this.ceaseDate,
      "code" : "endUser.serviceCeased.unknownReason",
      "message" : "The end user's service is being ceased. The cease order can be cancelled at the end user's request"
    },null,'\n')
    
    this.Cease_Data_Completed = JSON.stringify({
      "id" : "ae19c8ee-db3f-427a-abf1-ab4bb5e8f289",
      "correlationId" : "ID-bos-notification-service-bosd62-0-0-9-1690556292-6477954f8gl692-1690556872354-0-217",
      "generatedAt" : this.generatedAt,
      "userId" : "middleware",
      "type" : "UNSOLICITED_CEASE_COMPLETE_RECEIVED",
      "providerId" : "SNS",
      "providerOrderId" : this.formData.doid,
      "serviceId" : this.formData.dsid,
      "serviceType" : "data",
      "ceaseDate" : this.ceaseDate,
      "code" : "endUser.line.ceased",
      "message" : "The end user is ceasing their line. This will cease their current service."
    },null,'\n')

    this.Cease_Voice_Warning = JSON.stringify({
      "id" : "ac2d1c58-c21f-4348-9dde-94f0e2ce10ea",
      "correlationId" : "ID-bos-notification-service-bosd62-0-0-9-1690556292-6477954f8gl692-1690556872354-0-213",
      "generatedAt" : this.generatedAt,
      "userId" : "middleware",
      "type" : "UNSOLICITED_CEASE_WARNING_RECEIVED",
      "providerId" : "SNS",
      "providerOrderId" : this.formData.void,
      "serviceId" : this.formData.vsid,
      "serviceType" : "voice",
      "ceaseDate" : this.ceaseDate,
      "code" : "endUser.serviceCeased.unknownReason",
      "message" : "The end user's service is being ceased. The cease order can be cancelled at the end user's request"
    }, null, '\n');

    this.Cease_Voice_Completed = JSON.stringify({
      "id" : "ae19c8ee-db3f-427a-abf1-ab4bb5e8f289",
      "correlationId" : "ID-bos-notification-service-bosd62-0-0-9-1690556292-6477954f8gl692-1690556872354-0-217",
      "generatedAt" : this.generatedAt,
      "userId" : "middleware",
      "type" : "UNSOLICITED_CEASE_COMPLETE_RECEIVED",
      "providerId" : "SNS",
      "providerOrderId" : this.formData.void,
      "serviceId" : this.formData.vsid,
      "serviceType" : "voice",
      "ceaseDate" : this.ceaseDate,
      "code" : "endUser.line.ceased",
      "message" : "The end user is ceasing their line. This will cease their current service."
    }, null, '\n');
    
    this.Sent_to_FH = JSON.stringify({
      "id": "3119365d-6744-44c1-af8a-56d82fea4508",
      "correlationId": "ID-bos-notification-service-bosd62-0-0-9-1690556292-6477954f8gl692-1690556872354-0-193",
      "generatedAt": this.generatedAt,
      "userId": "middleware",
      "type": "SENT_TO_FULFILMENT_HOUSE",
      "providerId": "DFS",
      "operatorOrderId": this.formData.ooid,
      "effectiveDateTime": this.activationDate,
      "product": {
        "id": this.formData.assetId
      },
      "trackingNotificationsExpected": false,
      "fulfilmentHouseName": "Unipart",
      "fulfilmentHouseReference": "145930926",
      "fulfilmentHouseBatchReference": "N/A"
    }, null, '\n');

    this.Accepted_By_FH = JSON.stringify({
      "id" : "887b3261-6801-4233-af4c-ae911bd093f7",
      "correlationId" : "ID-bos-notification-service-bosd62-0-0-9-1690556292-6477954f8gl692-1690556872354-0-221",
      "generatedAt" : this.generatedAt,
      "userId" : "middleware",
      "type" : "ACCEPTED_BY_FULFILMENT_HOUSE",
      "providerId" : "DFS",
      "operatorOrderId" : this.formData.ooid,
      "product": {
            "id": this.formData.assetId
        },
      "effectiveDateTime" : this.activationDate,
      "trackingNotificationsExpected" : false,
      "expectedDispatchDate" : this.DFSDate,
      "expectedDeliveryDate" : this.deliveryDate,
      "stockAvailableDate" : this.DFSDate
    },null,'\n')
    
    this.Processing_By_FH = JSON.stringify({
      "id" : "fb3e7ea5-e889-4aff-ada4-3f355efebd58",
      "correlationId" : "ID-bos-notification-service-bosd62-0-0-9-1690556292-6477954f8gl692-1690556872354-0-195",
      "generatedAt" : this.generatedAt,
      "userId" : "middleware",
      "type" : "PROCESSING_BY_FULFILMENT_HOUSE",
      "providerId" : "DFS",
      "product": {
            "id": this.formData.assetId
        },
       "operatorOrderId" : this.formData.ooid,
      "effectiveDateTime" : this.activationDate,
      "trackingNotificationsExpected" : false
    },null,'\n')

    this.Dispatched = JSON.stringify({
      "id" : "76299f75-07e0-46d9-b872-145ad0ec9a89",
      "correlationId" : "ID-bos-notification-service-bosd62-0-0-9-1690556292-6477954f8gl692-1690556872354-0-205",
      "generatedAt" : this.generatedAt,
      "userId" : "middleware",
      "type" : "DISPATCHED",
      "providerId" : "DFS",
      "operatorOrderId" : this.formData.ooid,
      "effectiveDateTime" : this.activationDate,
      "product": {
            "id": this.formData.assetId
        },
      "trackingNotificationsExpected" : true,
      "trackingCourier" : "ROYALMAIL24",
      "trackingNumber" : "FR10552310GB",
      "trackingUrl" : "http://www.royalmail.com/portal/rm/track?trackNumber=FR10552310GB",
      "expectedDeliveryDate" : this.deliveryDate
    },null,'\n')

    this.Delivered = JSON.stringify({
      "id" : "9dc63f1e-29e8-40df-8c6f-d5698b2e3160",
      "correlationId" : "ID-bos-notification-service-bosd62-0-0-9-1690556292-6477954f8gl692-1690556872354-0-203",
      "generatedAt" : this.generatedAt,
      "userId" : "middleware",
      "type" : "DELIVERED",
      "providerId" : "DFS",
      "operatorOrderId" : this.formData.ooid,
      "product": {
            "id": this.formData.assetId
        },
      "effectiveDateTime" : this.activationDate,
      "trackingNotificationsExpected" : false
    },null,'\n')

    this.UnDelivered = JSON.stringify({
      "id" : "aadc2f72-17ef-4d29-b208-642961775a63",
      "correlationId" : "ID-bos-notification-service-bosd62-0-0-9-1691475112-c77cb7446w9kzp-1691481141660-0-31",
      "generatedAt" : this.generatedAt,
      "userId" : "middleware",
      "type" : "HARDWARE_UNDELIVERED",
      "providerId" : "DFS",
      "product": {
            "id": this.formData.assetId
        }, 
      "operatorOrderId" : this.formData.ooid,
      "effectiveDateTime" : this.activationDate,
      "trackingNotificationsExpected" : false,
      "reason" : "Order Undelivered due to customer unavailability"
    },null,'\n')

    this.Return_received = JSON.stringify({
      "id" : "12390ebf-852a-4ca5-9391-c1e6808e33f4",
      "correlationId" : "ID-bos-notification-service-bosd62-0-0-9-1691475112-c77cb7446w9kzp-1691481141660-0-15",
      "generatedAt" : this.generatedAt,
      "userId" : "middleware",
      "type" : "RETURN_RECEIVED",
      "providerId" : "DFS",
      "operatorOrderId" : this.formData.ooid,
      "product": {
            "id": this.formData.assetId
        }, 
      "effectiveDateTime" : this.activationDate,
      "trackingNotificationsExpected" : false,
      "trackingNumber" : "ROYALMAIL-12355"
    },null,'\n')

  }

  onSubmit(){
    this.manipulateJSON();
    if(this.formData.ooid!=''||this.formData.void!=''||this.formData.doid!=''||this.formData.vsid!=''||this.formData.dsid!=''||this.formData.directory!=''||this.formData.assetId!='')
      this.show_json = true;
  }

  copyToClipboard( text: string ){
    this.clipboard.copy(text);
  }
}
