import {Component, ElementRef, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {MessageService} from '../shared/messageService';

@Component({
  selector: 'app-comments-modal',
  templateUrl: './comments-modal.component.html',
  styleUrls: ['./comments-modal.component.scss']
})
export class CommentsModalComponent implements OnInit {

  @ViewChild('comments')  extendedDetailsModal: ElementRef;
  @Input() test;
  commentsArray: [any];
  private modalRef: NgbModalRef ;
  closeResult: string;
  constructor(private modalService: NgbModal, private _messageService: MessageService) { }

  ngOnInit() {
  }

  open() {

    this.modalRef = this.modalService.open(this.extendedDetailsModal);
  }
  altOpen(comments) {
    this.commentsArray = comments;
   if (this.commentsArray.length > 0) {
       this.open();
     } else {this.clickFilter("אין הערות למשקיע זה"); }
  }
  clickFilter(message: string): void {
    this._messageService.filter(message);
  }

}
