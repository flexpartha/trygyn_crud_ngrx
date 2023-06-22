import { clientReducer } from "../state/client.reducer";
import { CLIENT_STATE_NAME } from "../state/client.selector";
import { clientState } from "../state/client.state";

export interface AppState{
    //clients:clientState
    [CLIENT_STATE_NAME]: clientState
}

export const AppReducer ={
   // clients:clientReducer
   [CLIENT_STATE_NAME]: clientReducer
}