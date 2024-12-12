import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingleClientComponent } from './single-client/single-client.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/clientlist',
    pathMatch: 'full',
  },
  {
    path: 'clientlist',
    loadChildren: () =>
      import('./list/list.module').then((mod) => mod.ListModule),
  },
  {
    path: 'addclient',
    loadChildren: () => import('./add/add.module').then((mod) => mod.AddModule),
  },
  {
    path: 'editclient',
    loadChildren: () =>
      import('./edit/edit.module').then((mod) => mod.EditModule),
  },
  {
    path: 'clientlist/view/:id',
    component: SingleClientComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
