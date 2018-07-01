import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InvestorListComponent} from './investor-list/investor-list.component';
import {InvestorComponent} from './investor/investor.component';
import {InvestorsRoutingModule} from './investors-routing.module';
import {InvestorsComponent} from './investors.component';
import { InvestorModalComponent } from './investor/investor-modal/investor-modal.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { InvestorProfileComponent } from './investor/investor-profile/investor-profile.component';
import {RatingComponent} from '../component/rating/rating.component';
import { AddInvestorComponent } from './investor/add-investor/add-investor.component';
import { CommentsModalComponent } from '../component/comments-modal/comments-modal.component';
import { FormsModule } from '@angular/forms';
import {DatePickerComponent} from '../component/date-picker/date-picker.component';
@NgModule({
  imports: [
    CommonModule,
    InvestorsRoutingModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  declarations: [
    DatePickerComponent,
    RatingComponent,
    InvestorsComponent,
    InvestorListComponent,
    InvestorComponent,
    InvestorModalComponent,
    InvestorProfileComponent,
    AddInvestorComponent,
    CommentsModalComponent
  ]
})
export class InvestorsModule {}
