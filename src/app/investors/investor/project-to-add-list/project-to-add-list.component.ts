import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProjectService} from '../../../projects/services/projects.service';

@Component({
  selector: 'app-project-to-add-list',
  templateUrl: './project-to-add-list.component.html',
  styleUrls: ['./project-to-add-list.component.scss']
})
export class ProjectToAddListComponent implements OnInit {

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
  }

}
