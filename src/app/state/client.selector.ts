import { createFeatureSelector, createSelector } from "@ngrx/store";
import { clientState } from "./client.state";

export const CLIENT_STATE_NAME = 'Clients'
const getClientState = createFeatureSelector<clientState>(CLIENT_STATE_NAME);

export const getClients = createSelector(getClientState, (state:any)=>{
    return state.clientList;
});