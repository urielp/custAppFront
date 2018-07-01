import {Component, Input, OnInit, OnDestroy, ViewChild} from '@angular/core';
import Investor from '../../../models/investor.model';
import {InvestorsService} from '../investors-service';
import {ActivatedRoute, Params} from '@angular/router';
import {Subscription} from 'rxjs';
import {CommentsModalComponent} from '../../../component/comments-modal/comments-modal.component';

@Component({
  selector: 'app-investor-profile',
  templateUrl: './investor-profile.component.html',
  styleUrls: ['./investor-profile.component.scss']
})
export class InvestorProfileComponent implements OnInit, OnDestroy {

  @ViewChild(CommentsModalComponent) commentsdDetails: CommentsModalComponent ;
  investorObject: Investor;
  prametersSubscription: Subscription;
  id: string;

  constructor(private investorService: InvestorsService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.prametersSubscription = this.route.params.subscribe(
      (params: Params) => {
        this.id = params.id;
       console.log(this.id);
        this.getInvestorData();
      }
    );
  }

  ngOnDestroy() {
    this.prametersSubscription.unsubscribe();
  }

  getInvestorData() {
console.log('getting investor data');
    this.investorService.getSingleInvestorById(this.id).subscribe(
      data => {
        console.log(data.data) ;
        this.investorObject = data.data;
      });
  }

  getTheArray() {

  }
  openExtendedDetailsModal(comments) {
    this.commentsdDetails.altOpen(this.investorObject.comments);
  }
}
