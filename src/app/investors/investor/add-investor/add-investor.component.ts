import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-add-investor',
  templateUrl: './add-investor.component.html',
  styleUrls: ['./add-investor.component.scss']
})
export class AddInvestorComponent implements OnInit {

  constructor() { }
@ViewChild('f') addInvestorForm: NgForm;
  ngOnInit() {
  }
  onSubmit(form: NgForm) {
    console.log(form);
  }

}
