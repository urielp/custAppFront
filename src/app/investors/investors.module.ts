import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InvestorListComponent} from './investor-list/investor-list.component';
import {InvestorComponent} from './investor/investor.component';
import {InvestorsRoutingModule} from './investors-routing.module';
import {InvestorsComponent} from './investors.component';


@NgModule({
  imports: [
    CommonModule,
    InvestorsRoutingModule
  ],
  declarations: [
    InvestorsComponent,
    InvestorListComponent,
    InvestorComponent
  ]
})
export class InvestorsModule {}
