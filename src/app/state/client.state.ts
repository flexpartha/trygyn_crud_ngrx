import { EntityState, createEntityAdapter } from "@ngrx/entity";
import { Client } from "../models/client.models";

//THIS SECTION WITHOUT ENTITY ADAPTERS

// export interface clientState {
//     clientList:Client[];
// }

// export const initialState: clientState = {
//     // clientList: [
//     //     {
//     //         id: 1,
//     //         clientname : 'DELL',
//     //         email: "partha.chakra2@gmail.com",
//     //         phoneNumber: "9862029378"
//     //     },
//     //     {
//     //         id: 2,
//     //         clientname : 'SHELL',
//     //         email: "partha.chakS2@gmail.com",
//     //         phoneNumber: "9820293709"
//     //     }
//     // ]
//     clientList: []
// }

//WITH ENTITY ADAPTERS

export interface clientState extends EntityState<Client>{};
export const clientsAdapter = createEntityAdapter<Client>();
export const initialState: clientState = clientsAdapter.getInitialState();
export const clientsSelectors = clientsAdapter.getSelectors();
