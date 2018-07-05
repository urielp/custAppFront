import { Component, OnInit } from '@angular/core';
import {ModalService} from '../../../services/modalService';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  constructor(private modalService: ModalService) { }

  ngOnInit() {
  }
  closeModal(id: string) {
    this.modalService.close(id);
  }
  openModal(id: string) {
    console.log('open Modal');
    this.modalService.open(id);

  }
}
