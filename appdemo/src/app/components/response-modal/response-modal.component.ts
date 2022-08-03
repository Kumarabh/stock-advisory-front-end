import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-response-modal',
  templateUrl: './response-modal.component.html',
  styleUrls: ['./response-modal.component.css']
})
export class ResponseModalComponent implements OnInit {

  displayStyle;
  modalData;
 
 
   constructor(private service: DataService) { 
     this.service.modalDataObjectBehavior.subscribe(data => {
       this.displayStyle = data['displayStyle'],
       this.modalData = data['data']
       console.log('new modal data', this.displayStyle, this.modalData)
     })
   }
 
   ngOnInit() {
   }
 
 
   closePopup() {
     if(this.service.modalDataObjectBehavior.getValue().signOut) {
       const obj = {
         displayStyle: 'none',
         data: null,
         signOut: false
       }
       this.service.modalDataObjectBehavior.next(obj);
      //  this.service.signOut();
     } else {
       const obj = {
         displayStyle: 'none',
         data: null,
         signOut: false
       }
       this.service.modalDataObjectBehavior.next(obj);
     }
     
 
   }
 
 }
 