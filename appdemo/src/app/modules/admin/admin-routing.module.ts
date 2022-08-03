import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddAdvisoryComponent } from './components/add-advisory/add-advisory.component';
import { AdminComponent } from './components/admin/admin.component';


const routes: Routes = [
  {
    path: '', component: AdminComponent,
    children: [
      {
        path: ':id', component: AddAdvisoryComponent
      }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
