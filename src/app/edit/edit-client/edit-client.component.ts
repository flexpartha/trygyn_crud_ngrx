import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Subscription } from 'rxjs/internal/Subscription';
import { Client } from 'src/app/models/client.models';
import { ClientFacadeService } from '../../services/client-facade.service';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-edit-client',
    templateUrl: './edit-client.component.html',
    styleUrls: ['./edit-client.component.scss'],
    standalone: true,
    imports: [ReactiveFormsModule, NgIf],
})
export class EditClientComponent implements OnInit, OnDestroy {
  editForm!: FormGroup;
  isSubmitted = false;
  clientList: Client[] = [];
  client!: Client;
  refreshClnt: any;
  clientId: any;
  clientSubscription: Subscription = new Subscription();

  constructor(private readonly facade: ClientFacadeService) {}

  ngOnInit(): void {
    this.createUpdateForm();
    this.clientSubscription = this.facade
      .getSigleClient()
      .subscribe((clientres) => {
        if (clientres) {
          this.client = clientres;
          this.clientId = clientres.id;
          this.editForm.patchValue({
            clientname: clientres.clientname,
            email: clientres.email,
            phoneNumber: clientres.phoneNumber,
          });
        }
      });
  }

  createUpdateForm() {
    this.editForm = new FormGroup({
      clientname: new FormControl(null),
      email: new FormControl(null),
      phoneNumber: new FormControl(null),
    });
  }

  updateClient() {
    const clientname = this.editForm.value.clientname;
    const email = this.editForm.value.email;
    const phoneNumber = this.editForm.value.phoneNumber;

    const client: Client = {
      id: this.clientId,
      clientname,
      email,
      phoneNumber,
    };
    this.facade.updateClient(client);
  }

  get f() {
    return this.editForm.controls;
  }

  ngOnDestroy(): void {
    if (this.clientSubscription) {
      this.clientSubscription.unsubscribe();
    }
  }
}
