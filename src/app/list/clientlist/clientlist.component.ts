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

  //clientList: Array<any> = [];
  clientList!: Observable<Client[]>;
  clientnameString = '';
  clientData:any;

  constructor(private router: Router,public store:Store<AppState>) {}

  ngOnInit(): void {
    this.clientList = this.store.select(getClients);
    this.store.dispatch(loadClients());
    // this.store.select(getClients).subscribe((getClientList)=>{
    //   console.log("getClientList::--",getClientList);
    //   this.clientData = getClientList;
    //   this.clientList = getClientList;
    //   console.log("this.clientList::--",this.clientList);
    //   console.log("this.clientList::--",this.clientList.length);
    // });
   // this.store.dispatch(loadClients());
  }

  selectedClient(clientData:any){
    console.log("this.clientData::--",clientData);
    //this.subService.seteditDataLoadEvnt(clientData);
    this.router.navigate(['/editclient',clientData]);
  }

  
  deleteclient(id:any) {
    //console.log("index::--",clients);
    //let newState = [...this.clientList];
    //newState.splice(idx,1);
    //console.log("newState::--",newState);
    //this.clientList = newState;
    //console.log("this.clientList::--",this.clientList);
    // const client: Client = {
    //   clientname: idx.clientname,
    //   email: idx.email,
    //   phoneNumber: idx.phoneNumber
    // }
    //sessionStorage.setItem("loaddata",JSON.stringify(this.clientList));
    this.store.dispatch(deleteClients({ id }));
    // this.store.select(getClients).subscribe((getClientList)=>{
    //   console.log("getClientList::--",getClientList);
    //   this.clientData = getClientList;
    //   this.clientList = getClientList;
    //   console.log("this.clientList::--",this.clientList);
    //   console.log("this.clientList::--",this.clientList.length);
    // })
  }

  navigaeAddclient() {
    this.router.navigate(['/addclient'])
  }
}
