import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProjectService} from '../../../projects/services/projects.service';
import Project from '../../../models/project.model';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-project-to-add-list',
  templateUrl: './project-to-add-list.component.html',
  styleUrls: ['./project-to-add-list.component.scss']
})
export class ProjectToAddListComponent implements OnInit {

  @Input() currentProjects;
  @Output() addAvilableproject = new EventEmitter<Project>();
  avilableProjects: Project[];
  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.projectService.getProjetcs().subscribe((results) => {
      if (results.success) {
        this.avilableProjects = results.data.docs.filter(project => {
          return !this.currentProjects.includes(project._id);
        }).map((project) => {
          let t = Object.assign(new Project(), project as Project);
          return t;
        });
      }
    });
  }
  addProjectToInvestor(event): void {
    this.projectService.newEvent(event);
    const index = this.avilableProjects.indexOf(event);
    this.avilableProjects.splice(index, 1);
    this.addAvilableproject.emit(event);
  }
}
