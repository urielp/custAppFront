import {Component, Input, OnInit} from '@angular/core';
import {InvestorsService} from './investors-service';
import Investor from '../../models/investor.model';
@Component({
  selector: 'app-investor',
  templateUrl: './investor.component.html',
  styleUrls: ['./investor.component.scss']
})
export class InvestorComponent implements OnInit {

  @Input()expenseItem: Investor;
  constructor(private investorsService: InvestorsService) { }

  ngOnInit() {

  }

}
