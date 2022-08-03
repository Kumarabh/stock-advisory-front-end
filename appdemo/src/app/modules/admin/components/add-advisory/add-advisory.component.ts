import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdvisoryListComponent } from 'src/app/components/advisory-list/advisory-list.component';
import { DataService } from 'src/app/services/data.service';
import { AdminAdvisoryListComponent } from '../admin-advisory-list/admin-advisory-list.component';

@Component({
  selector: 'app-add-advisory',
  templateUrl: './add-advisory.component.html',
  styleUrls: ['./add-advisory.component.css']
})
export class AddAdvisoryComponent implements OnInit {

  @ViewChild('selectedHours', {static: false}) selectedHours: ElementRef<any>;
  @ViewChild('selectedMinutes', {static: false}) selectedMinutes: ElementRef<any>;
  @ViewChild('selectedAmpm', {static: false}) selectedAmpm: ElementRef<any>;

  dbError = null;
  invalidCredentialsErrorMessage: Boolean = false;
  advisoryDetailsForm: FormGroup;
  isSubmitted: boolean;
  dataResult: Object;
  dropdownDataResult;
  validPasswords = false;
  hours = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
  minutes = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10',
   '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
   '21', '22', '23', '24', '25', '26', '27', '28', '29', '30',
   '31', '32', '33', '34', '35', '36', '37', '38', '39', '40',
   '41', '42', '43', '44', '45', '46', '47', '48', '49', '50',
   '51', '52', '53', '55', '55', '56', '57', '58', '59'

];
ampm = ['AM', 'PM']



  constructor(private service: DataService, private fb: FormBuilder, private router: Router) { 

    this.advisoryDetailsForm = this.fb.group({
      category: new FormControl('', Validators.required),
      typeOfCall: new FormControl('', Validators.required),
      action: new FormControl('', Validators.required),
      timeOfCall: new FormControl('', Validators.required),
      nameOfShare: new FormControl('', Validators.required),
      rate: new FormControl('', Validators.required),
      stopLoss: new FormControl('', Validators.required),
      target: new FormControl('', Validators.required),
      secondTarget: new FormControl('', Validators.required),
      strikePrice: new FormControl(''),
      expiryDate: new FormControl('', Validators.required),
    })

  }

  ngOnInit() {

    this.getAdvisoryDropdownData();
    this.rateCalculations();
  }

  setTimeOfCall() {
    let hours = this.selectedHours.nativeElement.value;
    let minutes = this.selectedMinutes.nativeElement.value;
    let ampm = this.selectedAmpm.nativeElement.value
    this.advisoryDetailsForm.get('timeOfCall').setValue(hours + ':' + minutes + ' ' + ampm)

  }
  rateCalculations() {
    this.advisoryDetailsForm.get('rate').valueChanges.subscribe(data => {
      if(this.advisoryDetailsFormControls.rate.value) {
        const rate = +this.advisoryDetailsForm.get('rate').value;
        let stopLoss = 0;
        let target = 0;
        let secondTarget = 0;
        stopLoss = rate - (rate * .01);
        target = rate + (rate * .03);
        secondTarget = rate + (rate * .05);
        this.advisoryDetailsForm.get('stopLoss').setValue(stopLoss);
        this.advisoryDetailsForm.get('target').setValue(target);
        this.advisoryDetailsForm.get('secondTarget').setValue(secondTarget);

      } 
  })

  }
  getAdvisoryDropdownData() {
    this.service.getAdvisoryDropdownData().subscribe(data => {
      this.dropdownDataResult = data[0];
      console.log('===> advisory dropdown data', this.dropdownDataResult);
    })
  }

  get advisoryDetailsFormControls() {
     return this.advisoryDetailsForm.controls;
  }
  onSubmit() {

    if(this.advisoryDetailsForm.invalid) {
      this.isSubmitted = true;
      return;
    }

    const postData = this.advisoryDetailsForm.value;
    this.service.createAdvisoryData(postData).subscribe(data => {
      const dbresult = data;
      if(dbresult['errorResponse']['status'] === 'success') {
        // this.advisoryDetailsForm.reset();
        this.openPopup(dbresult['errorResponse']['message'], false);
        this.service.advisoryAddedUpdateAdvisoryList.next(true);
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