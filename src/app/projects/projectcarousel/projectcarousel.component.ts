import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {MessageService} from '../../component/shared/messageService';

@Component({
  selector: 'app-projectcarousel',
  templateUrl: './projectcarousel.component.html',
  styleUrls: ['./projectcarousel.component.scss']
})
export class ProjectcarouselComponent implements OnInit {
  @ViewChild('comments')  extendedDetailsModal: ElementRef;
  private modalRef: NgbModalRef ;
  projects;
  constructor(private modalService: NgbModal, private _messageService: MessageService) { }

  ngOnInit() {
  }
  open() {
    this.modalRef = this.modalService.open(this.extendedDetailsModal);
  }
  altOpen(projects) {
    this.projects = projects;

    if (this.projects && this.projects.length > 0 ) {
      console.log(this.projects.length);
      this.open();
    } else {
      this.clickFilter('אין פרוייקטים למשקיע זה');

    }

  }
  clickFilter(message: string): void {
    console.log("toast in projetcs");
    this._messageService.filter(message);
  }


}
