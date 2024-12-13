import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Client } from 'src/app/models/client.models';
import { ClientFacadeService } from 'src/app/services/client-facade.service';


@Component({
    selector: 'app-addclient',
    templateUrl: './addclient.component.html',
    styleUrls: ['./addclient.component.scss'],
    standalone: true,
    imports: [ReactiveFormsModule],
})
export class AddclientComponent implements OnInit {
  clientForm!: FormGroup;
  isSubmitted = false;
  constructor(
    private fb: FormBuilder,
    private readonly facade: ClientFacadeService
  ) {}

  ngOnInit(): void {
    this.clientform();
  }

  clientform() {
    this.clientForm = this.fb.group({
      clientname: new FormControl(),
      email: new FormControl(),
      phoneNumber: new FormControl(),
    });
  }

  addClient() {
    this.isSubmitted = true;
    this.clientForm.get('clientname')?.setValidators([Validators.required]);
    this.clientForm.get('clientname')?.updateValueAndValidity();
    this.clientForm
      .get('email')
      ?.setValidators([Validators.required, Validators.email]);
    this.clientForm.get('email')?.updateValueAndValidity();
    this.clientForm.get('phoneNumber')?.setValidators([Validators.required]);
    this.clientForm.get('phoneNumber')?.updateValueAndValidity();
    if (this.clientForm.invalid) {
      return;
    } else {
      //this.router.navigate(['/clientlist'],  {state: [this.clientForm.value]});
      //this.subServ.setaddDataLoadEvnt(this.clientForm.value);
      //this.subServ.setsendeditDataLoadEvnt(null);
      const client: Client = {
        clientname: this.clientForm.value.clientname,
        email: this.clientForm.value.email,
        phoneNumber: this.clientForm.value.phoneNumber,
      };
      console.log('Client:::---', client);
      this.facade.addClient(client);
    }
  }

  get f() {
    return this.clientForm.controls;
  }
}
