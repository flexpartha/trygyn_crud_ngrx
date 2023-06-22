import { Client } from "../models/client.models";

export interface clientState {
    clientList:Client[];
}

export const initialState: clientState = {
    clientList: [
        {
            clientname : 'DELL',
            email: "partha.chakra2@gmail.com",
            phoneNumber: "9862029378"
        },
        {
            clientname : 'SHELL',
            email: "partha.chakS2@gmail.com",
            phoneNumber: "9820293709"
        }
    ]
}