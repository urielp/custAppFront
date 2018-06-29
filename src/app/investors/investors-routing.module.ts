import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvestorsComponent } from './investors.component';
import {InvestorProfileComponent} from './investor/investor-profile/investor-profile.component';
import {InvestorListComponent} from './investor-list/investor-list.component';
import {AddInvestorComponent} from './investor/add-investor/add-investor.component';

const routes: Routes = [
  {
    path: '', component: InvestorsComponent,
    children: [
      {path: 'investorsList', component: InvestorListComponent},
      {path: 'investorProfile/:id', component: InvestorProfileComponent},
      {path: 'addInvestor', component: AddInvestorComponent}
        // children: [ {path: 'investorProfile/:id', component: InvestorProfileComponent}]},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvestorsRoutingModule {
}
