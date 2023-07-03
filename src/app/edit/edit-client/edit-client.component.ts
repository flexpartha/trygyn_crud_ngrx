import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs/internal/Subscription';
import { Client } from 'src/app/models/client.models';
import { loadClients, updateClients } from 'src/app/state/client.action';
import { getClientById } from 'src/app/state/client.selector';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.scss']
})
export class EditClientComponent implements OnInit, OnDestroy {
  editForm!: FormGroup;
  isSubmitted = false;
  clientList: Client[] = [];
  client!: Client;
  refreshClnt:any;
  clientId:any;
  clientSubscription: Subscription =new Subscription();

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.createUpdateForm();
    this.clientSubscription = this.store.select(getClientById).subscribe((clientres)=>{
      if(clientres){
        this.client = clientres;
        this.clientId = clientres.id;
        this.editForm.patchValue({
          clientname: clientres.clientname,
          email: clientres.email,
          phoneNumber: clientres.phoneNumber
        })
      }
    });
    //this.store.dispatch(loadClients());
  }

  createUpdateForm(){
    this.editForm = new FormGroup({
      clientname: new FormControl(null),
      email: new FormControl(null),
      phoneNumber: new FormControl(null)
    })
  }
  
  updateClient(){
    const clientname = this.editForm.value.clientname;
    const email = this.editForm.value.email;
    const phoneNumber = this.editForm.value.phoneNumber;

    const client:Client = {
      id: this.clientId,
      clientname,
      email,
      phoneNumber
    };
    this.store.dispatch(updateClients({client}));
  }

  get f() { return this.editForm.controls; };

  ngOnDestroy(): void {
    if(this.clientSubscription){
      this.clientSubscription.unsubscribe();
    }
  }
}
