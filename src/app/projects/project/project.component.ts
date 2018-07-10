import {Component, Input, OnInit} from '@angular/core';
import Investor from '../../models/investor.model';
import Project from '../../models/project.model';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  @Input() project: Project;
  singleProject ;
  constructor() { }

  ngOnInit() {
    this.singleProject = new Project();
    Object.assign(this.singleProject, <Project> this.project);
  }
tets() {
    // /alert('test');
}
}
