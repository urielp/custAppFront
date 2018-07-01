import {Component, Input, OnInit, OnDestroy, ViewChild, EventEmitter, Output} from '@angular/core';
import Investor from '../../../models/investor.model';
import {InvestorsService} from '../investors-service';
import {ActivatedRoute, Params} from '@angular/router';
import {Subscription} from 'rxjs';
import {CommentsModalComponent} from '../../../component/comments-modal/comments-modal.component';
import {MessageService} from '../../../component/shared/messageService';

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
        this.getInvestorData();
      }
    );
  }
  ngOnDestroy() {
    this.prametersSubscription.unsubscribe();
  }

  getInvestorData() {
    this.investorService.getSingleInvestorById(this.id).subscribe(
      data => {
        this.investorObject = data.data as Investor;
        console.log(this.investorObject.lastName);
        this.investorObject.comments = data.data.commentsTest;
      });
  }
  openExtendedDetailsModal() {
      this.commentsdDetails.altOpen(this.investorObject.comments);
  }

}
