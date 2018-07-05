import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import Investor from '../../../models/investor.model';
import {InvestorsService} from '../investors-service';
import {ActivatedRoute, Router} from '@angular/router';
import {MessageService} from '../../../component/shared/messageService';

@Component({
  selector: 'app-add-investor',
  templateUrl: './add-investor.component.html',
  styleUrls: ['./add-investor.component.scss']
})
export class AddInvestorComponent implements OnInit {

  _investor: Investor;
   returnUrl: string;
  constructor(private investorsService: InvestorsService , private route: ActivatedRoute,
              private router: Router ,
              private _messageService: MessageService) { }
@ViewChild('f') addInvestorForm: NgForm;
  ngOnInit() {
    this._investor = new Investor();
    this.returnUrl = this.route.snapshot.queryParams['relativeTo'] || '/';
  }
  onSubmit(form: NgForm) {
     this.investorsService.addInvestor(this._investor).subscribe((results) => {
      if (results.success) {
        this.investorsService.investorsList.push(this._investor);
        this._messageService.filter(results.message);
        setTimeout(() => {
          this.router.navigate(['investorsList'], { relativeTo: this.route.parent});
        }, 3000);
      }
    });
  }


  clickFilter(message: string): void {
    this._messageService.filter(message);
  }
}
