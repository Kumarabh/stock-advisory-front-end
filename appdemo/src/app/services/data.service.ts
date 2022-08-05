import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
const modalDataObject = {
  displayStyle: 'none',
  data: null,
  signOut: false
}
@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private http: HttpClient) { }

  baseUrl = 'http://127.0.0.1:5000/api/v1'
  public userLoggedIn = new BehaviorSubject<Boolean>(true);
  public loggedInUserData = new BehaviorSubject<any>(null);
  public modalDataObjectBehavior = new BehaviorSubject<any>(modalDataObject);
  advisoryAddedUpdateAdvisoryList: Subject<boolean> = new Subject();
  stockAdvisoryDropdownUrl='assets/stockAdvisoryDropdown.json'


  createAdvisoryData(postData) {
    return this.http.post(this.baseUrl + '/advisory', postData) 

  }
  getAdvisoryDropdownData() {
    // return this.http.get(this.baseUrl + '/advisory-dropdown') 
    return this.http.get(this.stockAdvisoryDropdownUrl);
  return this.http.get(this.baseUrl + '/advisory') 
  }

  deleteAdvisory(advisoryId) {
    return this.http.delete(this.baseUrl + '/advisory/' + advisoryId) 

  }
}
