import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HostAppComponent } from './host-app/host-app.component';
import { HostAppRoutingModule } from './host-app.routing.module';



@NgModule({
  declarations: [
    HostAppComponent
  ],
  imports: [
    CommonModule,
    HostAppRoutingModule
  ]
})
export class HostAppModule { }
