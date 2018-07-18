import {Component, Input, OnInit} from '@angular/core';
import {ProjectService} from '../../../projects/services/projects.service';
import Project from '../../../models/project.model';


@Component({
  selector: 'app-investors-projects',
  templateUrl: './investors-projects.component.html',
  styleUrls: ['./investors-projects.component.scss']
})
export class InvestorsProjectsComponent implements OnInit {

  @Input()
   temp;
  _projects;

  _hasProjects: boolean;
  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    if (this._projects && this._projects.length > 0) {
      this._hasProjects = true;
    } else {this._hasProjects = false; }
    this.getinvestorAssociatedProjects();
  }
  getinvestorAssociatedProjects() {
   // if (!this._projects  ) {
    console.log(this._projects);
    if (!this._projects) {
      this.projectService.getinvestorAssociatedProjects(this.temp).subscribe((results) => {
        this._projects = results.data.map((project) => {
          return Object.assign(new Project(), project as Project);
        });
        this._hasProjects = true;
      });
    }
  }
}
