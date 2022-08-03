import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './components/admin/admin.component';
import { AddAdvisoryComponent } from './components/add-advisory/add-advisory.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ResponseModalComponent } from 'src/app/components/response-modal/response-modal.component';
import { AdminAdvisoryListComponent } from './components/admin-advisory-list/admin-advisory-list.component';


@NgModule({
  declarations: [AdminComponent, AddAdvisoryComponent, ResponseModalComponent, AdminAdvisoryListComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class AdminModule { }
