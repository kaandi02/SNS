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
  }
  show_json = false;

  CurrDate = new Date();
  month = this.CurrDate.getMonth()+1;
  todayDate = this.CurrDate.getUTCFullYear()+"-0"+this.month+"-"+this.CurrDate.getDate();
  generatedAt = this.CurrDate.getUTCFullYear()+"-0"+this.month+"-"+this.CurrDate.getDate()+"T10:40:22.755488303+01:00";
  activationDate = this.CurrDate.getUTCFullYear()+"-0"+this.month+"-"+this.CurrDate.getDate()+"T11:01:55+01:00";
  ceaseDate = this.CurrDate.getUTCFullYear()+"-0"+this.month+"-"+this.CurrDate.getDate()+"T14:37:21Z";

  BOS_Validation='';
  Data_Accepted = '';
  Voice_Accepted = '';
  Data_Activated = '';
  Voice_Activated = '';
  Data_Completed = '';
  Voice_Completed = '';
  Cease_Data_Warning = '';
  Cease_Data_Completed = ''
  Cease_Voice_Warning = '';
  Cease_Voice_Completed = '';

  manipulateJSON(){
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
  }

  onSubmit(){
    this.manipulateJSON();
    if(this.formData.ooid!=''||this.formData.void!=''||this.formData.doid!=''||this.formData.vsid!=''||this.formData.dsid!=''||this.formData.directory!='')
      this.show_json = true;
  }

  copyToClipboard( text: string ){
    this.clipboard.copy(text);
  }
}
