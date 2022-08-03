import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-admin-advisory-list',
  templateUrl: './admin-advisory-list.component.html',
  styleUrls: ['./admin-advisory-list.component.css']
})
export class AdminAdvisoryListComponent implements OnInit {

  dataResult = null;
  constructor(private service: DataService) { }

  ngOnInit() {
    this.getAdvisoryList();

    this.service.advisoryAddedUpdateAdvisoryList.subscribe(advisoryAdded => {
      if(advisoryAdded) this.getAdvisoryList();
    })

  }

  getAdvisoryList() {
    this.service.getAdvisoryList().subscribe(data => {
      this.dataResult = data;
    })
  }

  deleteAdvisoryList(advisoryId) {
     this.service.deleteAdvisory(advisoryId).subscribe(data => {
      const dbresult = data;
      console.log('errorResponse', dbresult);
      this.openPopup('advisory deleted', false);

      if(dbresult['errorResponse']['status'] === 'success') {
        // this.dbError = dbresult['response']['message']
        this.openPopup(dbresult['errorResponse']['message'], false);
        this.getAdvisoryList();
        // this.signOut();
      }
      if(dbresult['errorResponse']['status'] === 'failed') {
        this.openPopup(dbresult['errorResponse']['message'], false);
      }
    })  

  }

  openPopup(data, signOut) {
    const obj = {
      displayStyle: 'block',
      data: data,
      signOut: signOut
    }

    this.service.modalDataObjectBehavior.next(obj);
  }

}
