import { Component, OnInit } from '@angular/core';
import {InvestorsService} from './investors-service';

@Component({
  selector: 'app-investor',
  templateUrl: './investor.component.html',
  styleUrls: ['./investor.component.scss']
})
export class InvestorComponent implements OnInit {

  constructor(private investorsService: InvestorsService) { }

  ngOnInit() {

  }

}
