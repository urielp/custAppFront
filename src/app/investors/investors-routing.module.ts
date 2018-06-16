import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvestorsComponent } from './investors.component';

const routes: Routes = [
  {
    path: '', component: InvestorsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvestorsRoutingModule {
}
