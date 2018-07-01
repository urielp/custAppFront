import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {MessageService} from '../messageService';

@Component({
  selector: 'app-toasts',
  templateUrl: './toasts.component.html',
  styleUrls: ['./toasts.component.scss']
})
export class ToastsComponent implements OnInit,OnDestroy {

 private _message;
  constructor(private _messageService: MessageService) {
    this._messageService.listen().subscribe((m:any) => {

      this.onFilterClick(m);
    });
  }

  ngOnInit() {
  }
ngOnDestroy() {
  this._messageService.listen().subscribe();
}
  onFilterClick(event) {

    this.message = event;
    // Get the snackbar DIV
    var x = document.getElementById("snackbar");

    // Add the "show" class to DIV
    x.className = "show";

    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }

  set message(message) {
    this._message = message;
  }
  get message(): string {
    return this._message;
  }
}
