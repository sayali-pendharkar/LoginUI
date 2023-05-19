import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent} from './authentication/login/login.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { BlankComponent } from './layout/blank/blank.component';
import { FullComponent } from './layout/full/full.component';

const routes: Routes = [
  {
    path: '', 
    component: BlankComponent,
    loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule)    
 },
 {
  path: 'login',
  component: BlankComponent,
  loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule)
 },

 {
  path: 'dashboard', 
  component: FullComponent,
  loadChildren: () => import('./features/dashboard/dashboard.module').then(m => m.DashboardModule),
  }, 
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
