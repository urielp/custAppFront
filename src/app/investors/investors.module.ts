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
import {ToastsComponent} from '../component/shared/toasts/toasts.component';
import {PaginationComponent} from '../component/shared/pagination/pagination.component';
import {ProjectcarouselComponent} from '../projects/projectcarousel/projectcarousel.component';
import {ProjectsModule} from '../projects/projects.module';
import { InvestorsProjectsComponent } from './investor/investors-projects/investors-projects.component';
@NgModule({
  imports: [
    CommonModule,
    InvestorsRoutingModule,
    FormsModule,
    NgbModule.forRoot(),
    ProjectsModule
  ],
  declarations: [
    PaginationComponent,
    CommentsModalComponent,
    DatePickerComponent,
    RatingComponent,
    InvestorsComponent,
    InvestorListComponent,
    InvestorComponent,
    InvestorModalComponent,
    InvestorProfileComponent,
    AddInvestorComponent,
    ToastsComponent,
    ProjectcarouselComponent,
    InvestorsProjectsComponent
  ]
})
export class InvestorsModule {}
