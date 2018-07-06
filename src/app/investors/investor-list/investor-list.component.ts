import { Component, OnInit } from '@angular/core';
import {InvestorsService} from '../investor/investors-service';
import Investor from '../../models/investor.model';
import {ActivatedRoute, Router} from '@angular/router';
// /import {readdirSync} from 'fs';

@Component({
  selector: 'app-investorlist',
  templateUrl: './investor-list.component.html',
  styleUrls: ['./investor-list.component.scss']
})
export class InvestorListComponent implements OnInit {

  investorsList: Investor[];
  showPaginition: boolean;
  pages: any;
  total: any;
  limit: any;
  constructor(private investorsService: InvestorsService , private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.investorsService.getInvestors().subscribe((results) => {
      if (results.success) {
        this.investorsList = results.data.docs as Investor[];
        this.investorsService.investorsList = results.data.docs as Investor[];
        console.log( results.data.pages);
        this.pages = results.data.pages;
        this.total = results.data.total;
        this.limit = results.data.limit;
      }
    });
  }
  onLoadProfile() {
    this.router.navigate(['../addInvestor/'], { relativeTo: this.route , queryParams: this.route.url});
  }
  getPage(page: number) {

   this.investorsService.getListByPage(page).subscribe((investors) => {
     if (investors.success) {
       this.investorsList = investors.data.docs as Investor[];
       this.investorsService.investorsList = investors.data.docs as Investor[];
     } else {
       alert(investors.message);
     }
   });
  }
}
