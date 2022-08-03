import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  searchForm: FormGroup
  dataResult
  cartLength
  userLoggedIn
  constructor(private service: DataService, private fb: FormBuilder, private router: Router) {
    this.searchForm = this.fb.group({
      search: new FormControl('')
    }) 
    this.getNavbarLinks();
  }

  ngOnInit() {

    // this.service.userLoggedIn.subscribe(data => {
    //   this.userLoggedIn = data
    // })

    // this.service.cartLength.subscribe(data => {
    //   this.cartLength = data;
    // })
  }

  onSubmit() {

  }

 
//   const scrollToBottom = (id) => {
//     const element = document.getElementById(id);
//     element.scrollTop = element.scrollHeight;
// }

  signOut() {
    // this.service.userLoggedIn.next(false);
    // this.service.loggedInUserData.next(null);
    // this.service.deleteToken();
    // this.router.navigate(['/'])
  }
  getNavbarLinks() {
    // this.service.getNavbarLinks().subscribe(
    //   (data) => {this.dataResult = data[0]},
    //   (error) => {console.log('navbar links fetch caused error')}
    // )
  }
}
