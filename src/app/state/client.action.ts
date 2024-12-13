import { createAction, props } from '@ngrx/store';
import { Client } from '../models/client.models';
import { Update } from '@ngrx/entity';

export const ADD_CLIENT_ACTION = '[ADDCLIENT page] add client';
export const ADD_CLIENT_SUCCESS = '[ADDCLIENT page] add client success';

export const UPDATE_CLIENT_ACTION = '[CLIENT page] update client';
export const UPDATE_CLIENT_SUCCESS = '[CLIENT page] upde client success';

export const DELETE_CLIENT_ACTION = '[CLIENT page] delete client';
export const DELETE_CLIENT_SUCCESS = '[CLIENT page] delete client success';

export const LOAD_CLIENTS = '[CLIENT page] load client';
export const LOAD_CLIENT_SUCCESS = '[CLIENT page] load client success';

export const LOAD_CLIENT_DATA = '[CLIENT page] load client data';

export const addClient = createAction(
  ADD_CLIENT_ACTION,
  props<{ client: Client }>()
);
export const addClientSuccess = createAction(
  ADD_CLIENT_SUCCESS,
  props<{ client: Client }>()
);

//THIS SECTION IS FOR WITHOUT ENTITYADAPTER
// export const updateClients = createAction(UPDATE_CLIENT_ACTION, props<{ client : Client}>());
// export const updateClientsSuccess = createAction(UPDATE_CLIENT_SUCCESS, props<{ client : Client}>());

// WITH ENTITY ADAPTER
export const updateClients = createAction(
  UPDATE_CLIENT_ACTION,
  props<{ client: Client }>()
);
export const updateClientsSuccess = createAction(
  UPDATE_CLIENT_SUCCESS,
  props<{ client: Update<Client> }>()
);

export const deleteClients = createAction(
  DELETE_CLIENT_ACTION,
  props<{ id: number }>()
);

export const deleteClientsSuccess = createAction(
  DELETE_CLIENT_SUCCESS,
  props<{ id: number }>()
);

export const loadClients = createAction(LOAD_CLIENTS);
export const loadClientsSuccess = createAction(
  LOAD_CLIENT_SUCCESS,
  props<{ clients: Client[] }>()
);
