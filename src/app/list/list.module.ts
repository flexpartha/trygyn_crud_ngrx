import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientlistComponent } from './clientlist/clientlist.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes = [
  {
    path: '', component:ClientlistComponent
  }
]

@NgModule({
  declarations: [
    ClientlistComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class ListModule { }
