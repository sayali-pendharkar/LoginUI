import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { MerchantComponent } from '../merchant/merchant.component';
import { ChargeMasterComponent } from '../charge-master/charge-master.component';

const routes: Routes = [
{ path:'',
  component: DashboardComponent
},
{ path:'merchant',
  component: MerchantComponent
},
{ path: 'charge-master',
   component: ChargeMasterComponent
},
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
