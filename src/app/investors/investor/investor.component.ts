import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {InvestorsService} from './investors-service';
import Investor from '../../models/investor.model';
import {InvestorModalComponent} from './investor-modal/investor-modal.component';
import {ActivatedRoute, Router} from '@angular/router';
import {CommentsModalComponent} from '../../component/comments-modal/comments-modal.component';

@Component({
  selector: 'app-investor',
  templateUrl: './investor.component.html',
  styleUrls: ['./investor.component.scss']
})
export class InvestorComponent implements OnInit {

  @Input()investorObject: Investor;
  @ViewChild(InvestorModalComponent) extendedDetails: InvestorModalComponent ;
   constructor(private investorsService: InvestorsService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {

  }
  openExtendedDetailsModal(investor: Investor) {
    this.extendedDetails.altOpen(investor);
  }

  onLoadProfile() {
    this.router.navigate(['../investorProfile/', this.investorObject._id], { relativeTo: this.route });
  }
}
