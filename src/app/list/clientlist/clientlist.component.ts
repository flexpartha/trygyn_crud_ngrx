import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { getClients } from 'src/app/state/client.selector';
import { AppState } from 'src/app/store/app.state';
import { addClient, deleteClients, loadClientsSuccess,loadClients } from 'src/app/state/client.action';
import { Client } from 'src/app/models/client.models';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-clientlist',
  templateUrl: './clientlist.component.html',
  styleUrls: ['./clientlist.component.scss']
})
export class ClientlistComponent implements OnInit {

  clientList!: Observable<Client[]>;
  clientnameString = '';
  clientData:any;

  constructor(private router: Router,public store:Store<AppState>) {}

  ngOnInit(): void {
    this.clientList = this.store.select(getClients);
    this.store.dispatch(loadClients());
  }

  selectedClient(clientData:any){
    this.router.navigate(['/editclient',clientData]);
  }

  
  deleteclient(id:any) {
    this.store.dispatch(deleteClients({ id }));
  }

  navigaeAddclient() {
    this.router.navigate(['/addclient'])
  }
}
