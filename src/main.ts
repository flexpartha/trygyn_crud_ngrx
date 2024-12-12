import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppComponent } from './app/app.component';
import { CustomSerializer } from './app/store/router/custom-serializer';
import { provideRouterStore } from '@ngrx/router-store';
import { importProvidersFrom } from '@angular/core';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { ClientEffects } from './app/state/client.effects';
import { provideEffects } from '@ngrx/effects';
import { AppReducer } from './app/store/app.state';
import { provideStore } from '@ngrx/store';
import { withInterceptorsFromDi, provideHttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app/app-routing.module';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule, AppRoutingModule),
    provideHttpClient(withInterceptorsFromDi()),
    provideStore(AppReducer),
    provideEffects(ClientEffects),
    provideRouterStore({
      serializer: CustomSerializer,
    }),
    provideStoreDevtools(),
  ],
}).catch((err) => console.error(err));
