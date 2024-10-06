import { createReducer, on } from '@ngrx/store';
import { clientsAdapter, initialState } from './client.state';
import {
  addClient,
  addClientSuccess,
  deleteClients,
  loadClients,
  loadClientsSuccess,
  updateClients,
  updateClientsSuccess,
} from './client.action';

// THIS SECTION OF CODE WHEN USE WITHOUT ENTITY ADAPTER

// const _clientReducer = createReducer(
//     initialState,
//     on(addClientSuccess, (state, action)=>{
//         let addClient = {...action.client};
//         //addClient.id = (state.clientList.length + 1).toString();
//         return {
//             ...state,
//             clientList: [...state.clientList, addClient]
//         }
//     }),
//     on(updateClientsSuccess, (state, action)=>{
//         const updatedClients = state.clientList.map((client:any)=>{
//             return action.client.id === client.id ? action.client : client;
//         })
//         return {
//             ...state,
//             clientList: updatedClients
//         }
//     }),
//     on(deleteClients, (state:any, {id})=>{
//         //let deleteClient = {...action.client};
//         //console.log(deleteClient);
//         const updateddeletedPost = state.clientList.filter((client:any)=>{
//             return client.id!= id;
//         });
//         return {
//             ...state,
//             clientList: updateddeletedPost
//         }
//     }),
//     on(loadClientsSuccess, (state, action)=>{
//         return {
//             ...state,
//             clientList: action.clients
//       }
//     }),
// )

//WITH ENTITY ADAPTER

const _clientReducer = createReducer(
  initialState,
  on(addClientSuccess, (state, action) => {
    return clientsAdapter.addOne(action.client, state);
  }),

  on(updateClientsSuccess, (state, action) => {
    return clientsAdapter.updateOne(action.client, state);
  }),

  on(deleteClients, (state, { id }) => {
    return clientsAdapter.removeOne(id, state);
  }),

  on(loadClientsSuccess, (state, action) => {
    return clientsAdapter.setAll(action.clients, state);
  })
);

export function clientReducer(state: any, action: any) {
  return _clientReducer(state, action);
}
