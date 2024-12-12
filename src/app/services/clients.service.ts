import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from '../models/client.models';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClientsService {
  constructor(private _http: HttpClient) {}

  getClients(): Observable<Client[]> {
    return this._http.get<Client[]>('http://localhost:3000/clients').pipe(
      map((res: Client[]) => {
        return res;
      })
    );
  }

  postClients(client: Client): Observable<Client> {
    return this._http
      .post<Client>('http://localhost:3000/clients', client)
      .pipe(
        map((res: Client) => {
          console.log(res);
          return res;
        })
      );
  }

  updateClients(client: Client) {
    // const updateclientData = {
    //   [client.id!]: {clientname: client.clientname, email: client.email, phoneNumber: client.phoneNumber}
    // }
    return this._http.put('http://localhost:3000/clients/' + client.id, client);
  }

  deleteClient(id: number) {
    return this._http.delete('http://localhost:3000/clients/' + id);
  }

  getClientById(id: string): Observable<Client> {
    return this._http.get<Client>('http://localhost:3000/clients/' + id);
  }
}
