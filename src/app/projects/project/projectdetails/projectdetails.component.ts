import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projectdetails',
  templateUrl: './projectdetails.component.html',
  styleUrls: ['./projectdetails.component.scss']
})
export class ProjectdetailsComponent implements OnInit {

  public sliders: Array<any> = [];
  constructor() {
    this.sliders.push(
      {
        imagePath: 'assets/smallbanner.jpg',
        label: 'First slide label',
        text:
          'Nulla vitae elit libero, a pharetra augue mollis interdum.'
      },
      {
        imagePath: 'assets/smallbanner.jpg',
        label: 'Second slide label',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      },
      {
        imagePath: 'assets/smallbanner.jpg',
        label: 'Third slide label',
        text:
          'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
      }
    );
  }

  ngOnInit() {
  }

}
