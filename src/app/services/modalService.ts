import {ElementRef, Injectable, ViewChild} from '@angular/core';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';

@Injectable()
export class ModalService {
  private modals: any[] = [];
  private modalRef: NgbModalRef;


  constructor(private modalService: NgbModal) { }
  add(modal: any) {
    // add modal to array of active modals
    this.modals.push(modal);
  }

  remove(id: string) {
    // remove modal from array of active modals
    this.modals = this.modals.filter(x => x.id !== id);
  }

  open(id: string) {
    // open modal specified by id
    let modal: any = this.modals.filter(x => x.id === id)[0];
    console.log(modal.el.nativeElement);
    //this.modalRef = this.modalService.open(modal.el.nativeElement)
    modal.open();
  }

  close(id: string) {
    // close modal specified by id
    let modal: any = this.modals.filter(x => x.id === id)[0];
    modal.close();
  }
}
