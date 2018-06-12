import { Component, OnInit } from '@angular/core';
import {InvestorsService} from '../investor/investors-service';

@Component({
  selector: 'app-investorlist',
  templateUrl: './investor-list.component.html',
  styleUrls: ['./investor-list.component.scss']
})
export class InvestorListComponent implements OnInit {

  investorsList = [];
  constructor(private investorsService: InvestorsService) { }

  ngOnInit() {
    this.investorsService.getInvestors().subscribe((results) => {
      if (results.success) {
        this.investorsList = results.data;
        console.log(this.investorsList);
      }
    });
  }

}
