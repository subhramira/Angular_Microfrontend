import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RemoteAppComponent } from './remote-app/remote-app.component';

const routes: Routes = [
 {
    path:'',
    component:RemoteAppComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RemoteAppRoutingModule { }