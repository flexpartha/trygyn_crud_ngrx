import { createFeatureSelector, createSelector } from "@ngrx/store";
import { clientState, clientsSelectors } from "./client.state";
import { getCurrentRoutes } from "../store/router/router.selector";
import { RouterStateUrl } from "../store/router/custom-serializer";

//THIS SECTION WITHOUT ENTITY ADAPTER
// export const CLIENT_STATE_NAME = 'Clients'
// const getClientState = createFeatureSelector<clientState>(CLIENT_STATE_NAME);

// export const getClients = createSelector(getClientState, (state:any)=>{
//     return state.clientList;
// });

// export const getClientById = createSelector(getClients, getCurrentRoutes,
//     (clientList, route:RouterStateUrl) =>{
//     return clientList ? clientList.find((client:any)=> client.id == route.params['id']) : null;
// })

//THIS SECTION WITH ENTITY ADAPTER

export const CLIENT_STATE_NAME = 'Clients'
const getClientState = createFeatureSelector<clientState>(CLIENT_STATE_NAME);

export const getClients = createSelector(getClientState, clientsSelectors.selectAll);
export const getClientEntities = createSelector(getClientState, clientsSelectors.selectEntities)
export const getClientById = createSelector(getClientEntities, getCurrentRoutes,
    (clientList, route:RouterStateUrl) =>{
    return clientList ? clientList[route.params['id']] : null;
})