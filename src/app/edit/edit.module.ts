import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditClientComponent } from './edit-client/edit-client.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

const routes:Routes = [
  {
    path: '', children:[
      {
        path: ":id", component:EditClientComponent
      }
    ]
  }
]


@NgModule({
  declarations: [
    EditClientComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class EditModule { }
