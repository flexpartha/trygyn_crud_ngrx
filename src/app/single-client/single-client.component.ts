import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../models/client.models';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.state';
import { getClientById } from '../state/client.selector';
import { ClientFacadeService } from '../services/client-facade.service';
import { RouterLink } from '@angular/router';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-single-client',
  templateUrl: './single-client.component.html',
  styleUrls: ['./single-client.component.scss'],
  standalone: true,
  imports: [RouterLink, AsyncPipe],
})
export class SingleClientComponent implements OnInit {
  singleClient$!: Observable<Client>;

  constructor(
    private store: Store<AppState>,
    private facade: ClientFacadeService
  ) {}

  ngOnInit(): void {
    this.singleClient$ = this.facade.getSigleClient();

    this.store.select(getClientById).subscribe((data) => {
      console.log(data);
    });
  }
}
