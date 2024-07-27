import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found.component';
import { loadRemoteModule } from '@angular-architects/module-federation';

const routes: Routes = [
  {
    path:'',redirectTo:'host',pathMatch:'full'
  },
  {
    path:'host',loadChildren: () => import('./host-app/host-app.module').then(m=> m.HostAppModule)
  },
  {
    path: 'remote',
    loadChildren: () =>{
         return loadRemoteModule({
          type: 'manifest',
          remoteName: 'remoteapp',
          exposedModule: './RemoteAppModule',
        })
        .then(m => m.RemoteAppModule)
      }
},

  {
    path:'**',component:PageNotFoundComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
