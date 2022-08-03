import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private router: Router, private ac: ActivatedRoute) { 

  }

  ngOnInit() {
    // this.router.navigateByUrl('/admin/create-advisory')
    this.ac.params.subscribe(param => {
      if(param['id']) {
        this.router.navigateByUrl(param['id']);
      } else  {
        this.router.navigateByUrl('/admin/create-advisory')

      }
      // else {
      //   this.router.navigateByUrl('/admin/create-advisory')

      // }
    })
  }

}
