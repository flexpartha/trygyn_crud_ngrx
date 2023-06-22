import { createAction, props } from "@ngrx/store";
import { Client } from "../models/client.models";

export const ADD_CLIENT_ACTION = '[CLIENT page] add client';
export const ADD_CLIENT_SUCCESS = '[CLIENT page] add client success';

export const UPDATE_CLIENT_ACTION = '[CLIENT page] update client';
export const UPDATE_CLIENT_SUCCESS = '[CLIENT page] upde client success';

export const DELETE_CLIENT_ACTION = '[CLIENT page] delete client';
export const DELETE_CLIENT_SUCCESS = '[CLIENT page] delete client success';

export const LOAD_CLIENTS = '[CLIENT page] load client';
export const LOAD_CLIENT_SUCCESS = '[CLIENT page] load client success';


export const addClient = createAction(ADD_CLIENT_ACTION, props<{ client: Client }>());
export const addClientSuccess = createAction(ADD_CLIENT_SUCCESS, props<{client:Client}>());

export const updateClients = createAction(UPDATE_CLIENT_ACTION, props<{ client : Client}>());
export const updateClientsSuccess = createAction(UPDATE_CLIENT_SUCCESS, props<{ client : Client}>());

export const deleteClients = createAction(DELETE_CLIENT_ACTION,props<{client: Client}>());
export const deleteClientsSuccess = createAction(DELETE_CLIENT_SUCCESS,props<{client : Client}>());

export const loadClients = createAction(LOAD_CLIENTS, props<{ client: Client }>());
export const loadClientsSuccess = createAction(LOAD_CLIENT_SUCCESS, props<{ clients : Client[]}>());