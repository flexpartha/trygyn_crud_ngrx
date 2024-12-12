import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../models/client.models';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.state';
import { getClientById } from '../state/client.selector';
import { ClientFacadeService } from '../services/client-facade.service';

@Component({
  selector: 'app-single-client',
  templateUrl: './single-client.component.html',
  styleUrls: ['./single-client.component.scss'],
})
export class SingleClientComponent implements OnInit {
  singleClient$!: Observable<Client>;

  constructor(
    private store: Store<AppState>,
    private facade: ClientFacadeService
  ) {}

  ngOnInit(): void {
    this.singleClient$ = this.facade.getSigleClient();
  }
}
