import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HostAppComponent } from './host-app/host-app.component';

const routes: Routes = [
 {
    path:'',
    component:HostAppComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HostAppRoutingModule { }