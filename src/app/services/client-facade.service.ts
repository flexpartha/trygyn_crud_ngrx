import { Injectable } from '@angular/core';
import { AppState } from '../store/app.state';
import { Store } from '@ngrx/store';
import { getClientById, getClients } from '../state/client.selector';
import {
  addClient,
  deleteClients,
  loadClients,
  updateClients,
} from '../state/client.action';
import { Observable } from 'rxjs';
import { Client } from '../models/client.models';

@Injectable({
  providedIn: 'root',
})
export class ClientFacadeService {
  constructor(public store: Store<AppState>) {}

  fetchClients() {
    this.store.dispatch(loadClients());
  }

  getClientsList(): Observable<Client[]> {
    return this.store.select(getClients);
  }

  addClient(client: Client) {
    this.store.dispatch(addClient({ client }));
  }
  deleteClient(id: number) {
    this.store.dispatch(deleteClients({ id }));
  }

  getSigleClient(): Observable<any> {
    return this.store.select(getClientById);
  }

  updateClient(client: Client) {
    this.store.dispatch(updateClients({ client }));
  }
}
