import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ClientsService } from "../services/clients.service";
import { addClient, addClientSuccess, deleteClients, deleteClientsSuccess, loadClients, loadClientsSuccess, updateClients, updateClientsSuccess } from "./client.action";
import { filter, map, mergeMap, switchMap, tap } from "rxjs";
import { Router } from "@angular/router";
import { ROUTER_NAVIGATION, RouterNavigatedAction } from "@ngrx/router-store";
import { Update } from "@ngrx/entity";
import { Client } from "../models/client.models";

@Injectable()
export class ClientEffects {

    constructor(private action$:Actions, private clientSrv:ClientsService,private router:Router){}

    loadClients$ = createEffect(() =>{
        return this.action$.pipe(
            ofType(loadClients),
            mergeMap((action)=>{
                return this.clientSrv.getClients().pipe(map((clients)=>{
                    return loadClientsSuccess({clients});
                }))
            })
        );
    }
   );

   addPost$ = createEffect(() =>{
    return this.action$.pipe(
        ofType(addClient),
        mergeMap((action)=>{
            return this.clientSrv.postClients(action.client).pipe(map((client) =>{
                return addClientSuccess({client});
            }))
        })
    )
   }
   );

// THIS SECTION FOR WITHOUT ENTITY ADAPTER

//    updateClient$ = createEffect(()=>{
//      return this.action$.pipe(
//         ofType(updateClients),
//         mergeMap((action)=>{
//             return this.clientSrv.updateClients(action.client).pipe(map((client:any)=>{
//                 return updateClientsSuccess({ client: action.client });
//             }))
//         })
//      )
//    });

//// THIS SECTION FOR WITH ENTITY ADAPTER

   updateClient$ = createEffect(()=>{
    return this.action$.pipe(
       ofType(updateClients),
       mergeMap((action)=>{
           return this.clientSrv.updateClients(action.client).pipe(map((client:any)=>{
            const updatedClient:Update<Client> = {
                id: action.client.id!,
                changes: {
                    ...action.client
                }
            }
               return updateClientsSuccess({ client: updatedClient });
           }))
       })
    )
  });
  
   deleteClient$ = createEffect(() =>{
    return this.action$.pipe(
        ofType(deleteClients),
        switchMap((action)=>{
            return this.clientSrv.deleteClient(action.id).pipe(map((id:any)=>{
                return deleteClientsSuccess({ id: action.id });
            }))
        })
    )
   });

   addRedirectS = createEffect(()=>{
    return this.action$.pipe(
       ofType(addClientSuccess),
       tap((action)=>{
           this.router.navigate(['/clientlist']);
       }
       )
    )
  },{ dispatch:false }
  )
   upDateRedirectS = createEffect(()=>{
     return this.action$.pipe(
        ofType(updateClientsSuccess),
        tap((action)=>{
            this.router.navigate(['/clientlist']);
        })
     )
   },
   { dispatch:false }
   );


   getSinglePost$ = createEffect(()=>{
    return this.action$.pipe(
        ofType(ROUTER_NAVIGATION),
        filter((r:RouterNavigatedAction) =>{
            return r.payload.routerState.url.startsWith('/editclient');
        }),
        map((r:any) => {
            return r.payload.routerState['params']['id'];
        }),
        switchMap((id:any)=>{
            return this.clientSrv.getClientById(id).pipe(
                map((client)=>{
                    const clientData = [{...client, id}];
                    return loadClientsSuccess({clients: clientData})
                })
            )
        })
    )
 });
}