import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-advisory-list',
  templateUrl: './advisory-list.component.html',
  styleUrls: ['./advisory-list.component.css']
})
export class AdvisoryListComponent implements OnInit {

  dataResult
  dataResultEquity
  dataResultFutures
  dataResultOptions

  constructor(private service: DataService) { }

  ngOnInit() {
    this.getAdvisoryList();
  }

  getAdvisoryList() {
   this.service.getAdvisoryList().subscribe(data => {
      this.dataResult = data;
      console.log(this.dataResult);
      this.dataResultEquity = this.dataResult.filter(element => element.category === 'EQUITY');
      this.dataResultFutures = this.dataResult.filter(element => element.category === 'FUTURES');
      this.dataResultOptions = this.dataResult.filter(element => element.category === 'OPTIONS');

    
    })
  }
}
