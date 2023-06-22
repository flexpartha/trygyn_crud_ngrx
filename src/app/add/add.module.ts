import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddclientComponent } from './addclient/addclient.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes = [
  {
    path: '', component:AddclientComponent
  }
]

@NgModule({
  declarations: [
    AddclientComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ]
})
export class AddModule { }
