import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RemoteAppModule } from './remote-app/remote-app.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RemoteAppModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
