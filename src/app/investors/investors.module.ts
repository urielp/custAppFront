import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InvestorListComponent} from './investor-list/investor-list.component';
import {InvestorComponent} from './investor/investor.component';
import {InvestorsRoutingModule} from './investors-routing.module';
import {InvestorsComponent} from './investors.component';
import { InvestorModalComponent } from './investor/investor-modal/investor-modal.component';


@NgModule({
  imports: [
    CommonModule,
    InvestorsRoutingModule
  ],
  declarations: [
    InvestorsComponent,
    InvestorListComponent,
    InvestorComponent,
    InvestorModalComponent
  ]
})
export class InvestorsModule {}
