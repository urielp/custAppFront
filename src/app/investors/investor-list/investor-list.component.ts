import { Component, OnInit } from '@angular/core';
import {InvestorsService} from '../investor/investors-service';
import Investor from '../../models/investor.model';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-investorlist',
  templateUrl: './investor-list.component.html',
  styleUrls: ['./investor-list.component.scss']
})
export class InvestorListComponent implements OnInit {

  investorsList: Investor[];
  constructor(private investorsService: InvestorsService , private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.investorsService.getInvestors().subscribe((results) => {
      if (results.success) {
        this.investorsList = results.data.docs as Investor[];
        console.log(this.investorsList);
        // this.investorsList.push({});
        // this.investorsList.push({});
        // this.investorsList.push({});
        // this.investorsList.push({});
        // this.investorsList.push({});
        // this.investorsList.push({});
        // this.investorsList.push({});
        // this.investorsList.push({});
        // this.investorsList.push({});
        // this.investorsList.push({});
        // this.investorsList.push({});
        // this.investorsList.push({});
      }
    });
  }
  onLoadProfile() {
    this.router.navigate(['../addInvestor/'], { relativeTo: this.route });
  }
}
