import { createReducer, on } from "@ngrx/store"
import { initialState } from "./client.state"
import { addClient, addClientSuccess, deleteClients, loadClients, loadClientsSuccess } from "./client.action"

const _clientReducer = createReducer(
    initialState,
    on(addClient, (state:any, action:any)=>{
        let addClient = {...action.client};

        return {
            ...state,
            clientList: [...state.clientList, addClient]
        }
    }),
    on(loadClients, (state:any, action:any)=>{
        return {
            ...state,
            clientList: action.clientList
      }
    }),on(deleteClients, (state:any, action:any)=>{
        let deleteClient = {...action.client};
        console.log(deleteClient);
        const updateddeletedPost = state.clientList.filter((client:any)=>{
            console.log(client);
            return client.clientname!= deleteClient.clientname;
        });
        console.log("",updateddeletedPost);
        return {
            ...state,
            clientList: updateddeletedPost
        }
    })
)

export function clientReducer(state:any, action:any){
    return _clientReducer(state, action)
}