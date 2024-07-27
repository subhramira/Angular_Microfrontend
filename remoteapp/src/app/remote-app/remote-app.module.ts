import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RemoteAppComponent } from './remote-app/remote-app.component';
import { RemoteAppRoutingModule } from './remote-app.routing.module';



@NgModule({
  declarations: [
    // RemoteAppComponent
  ],
  imports: [
    CommonModule,
    RemoteAppRoutingModule
  ],
  // exports:[
  //   RemoteAppComponent
  // ]
})
export class RemoteAppModule { }
