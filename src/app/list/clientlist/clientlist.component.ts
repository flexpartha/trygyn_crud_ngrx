import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Client } from 'src/app/models/client.models';
import { Observable } from 'rxjs';
import { ClientFacadeService } from 'src/app/services/client-facade.service';
import { NgIf, NgFor, AsyncPipe } from '@angular/common';
@Component({
    selector: 'app-clientlist',
    templateUrl: './clientlist.component.html',
    styleUrls: ['./clientlist.component.scss'],
    standalone: true,
    imports: [
        NgIf,
        NgFor,
        RouterLink,
        AsyncPipe,
    ],
})
export class ClientlistComponent implements OnInit {
  clientList!: Observable<Client[]>;
  clientnameString = '';
  clientData: any;

  constructor(
    private router: Router,
    private readonly facade: ClientFacadeService
  ) {}

  ngOnInit(): void {
    //this.clientList = this.store.select(getClients);
    //this.store.dispatch(loadClients());
    this.clientList = this.facade.getClientsList();
    this.facade.fetchClients();
  }

  selectedClient(clientData: any) {
    this.router.navigate(['/editclient', clientData]);
  }

  deleteclient(id: any) {
    this.facade.deleteClient(id);
  }

  navigaeAddclient() {
    this.router.navigate(['/addclient']);
  }
}
