import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import Investor from '../../models/investor.model';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-comments-modal',
  templateUrl: './comments-modal.component.html',
  styleUrls: ['./comments-modal.component.scss']
})
export class CommentsModalComponent implements OnInit {

  @ViewChild('comments')  extendedDetailsModal: ElementRef;
  commentsArray:[];
  private modalRef: NgbModalRef ;
  closeResult: string;
  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }
  open() {

    this.modalRef = this.modalService.open(this.extendedDetailsModal);
  }
  altOpen(comments) {
    this.commentsArray =  comments;
    this.open();
  }


}
