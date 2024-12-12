import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientlistComponent } from './clientlist/clientlist.component';
import { RouterModule, Routes } from '@angular/router';
//import { CounterLibModule } from 'counter-lib';

const routes: Routes = [
  {
    path: '',
    component: ClientlistComponent,
  },
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        ClientlistComponent,
    ],
})
export class ListModule {}
