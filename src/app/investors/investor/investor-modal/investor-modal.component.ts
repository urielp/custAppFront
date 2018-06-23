import { Component, OnInit , ElementRef , Input, ViewChild } from '@angular/core';
import {ModalDismissReasons, NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import Investor from '../../../models/investor.model';

@Component({
  selector: 'app-investor-modal',
  templateUrl: './investor-modal.component.html',
  styleUrls: ['./investor-modal.component.scss']
})
export class InvestorModalComponent implements OnInit {

  @ViewChild('contents')  extendedDetailsModal: ElementRef;
  private modalRef: NgbModalRef;
  investorObject: Investor;
  closeResult: string;
  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }
  open() {
    this.modalRef = this.modalService.open(this.extendedDetailsModal);
  }
  altOpen(investor: Investor) {
    this.investorObject = investor;
    this.open();
  }


  // anotherOpen(content) {
  //   this.modalService.open(content).result.then((result) => {
  //     this.closeResult = `Closed with: ${result}`;
  //   }, (reason) => {
  //     this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  //   });
  // }
  // private getDismissReason(reason: any): string {
  //   if (reason === ModalDismissReasons.ESC) {
  //     return 'by pressing ESC';
  //   } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
  //     return 'by clicking on a backdrop';
  //   } else {
  //     return  `with: ${reason}`;
  //   }
  // }
}
