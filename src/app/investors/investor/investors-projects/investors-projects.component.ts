import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {ProjectService} from '../../../projects/services/projects.service';
import Project from '../../../models/project.model';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs/internal/Subscription';


@Component({
  selector: 'app-investors-projects',
  templateUrl: './investors-projects.component.html',
  styleUrls: ['./investors-projects.component.scss']
})
export class InvestorsProjectsComponent implements OnInit,OnDestroy {

  @Input()
  asProjects;
  _projects;
  _hasProjects: boolean;
  @Input() event: Event;
  projectAdding: Subscription;
  @Output() testUpdatesInProjects = new EventEmitter<any>();
  constructor(private projectService: ProjectService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    if (this.asProjects && this.asProjects.length > 0) {
       this._hasProjects = true;
       this.getinvestorAssociatedProjects();
    } else {
      this._hasProjects = false;
    }
   this.projectAdding = this.projectService.events$.subscribe((project) => {
      this.pushProjectToArray(project);
    });
  }
  getinvestorAssociatedProjects() {
    if (!this._projects) {
      this.projectService.getinvestorAssociatedProjects(this.asProjects).subscribe((results) => {
        this._projects = results.data.map((project) => {
          return Object.assign(new Project(), project as Project);
        });
        this._hasProjects = true;
      });
    }
  }

  // adding available project to the current project list of investor
  pushProjectToArray(project: Project): void {
    if (!this._projects) {
      this._projects = new Array();
    }
    this._projects.push(project);
    this.asProjects.push(project.id);
    this._hasProjects = true;
  }
  addProject() {
    this.router.navigate(['addProjectToInvestor'], { relativeTo: this.route.parent});
  }

  ngOnDestroy() {
    this.projectAdding.unsubscribe();
  }

  saveChanges() {
    console.log('saved');
    this.testUpdatesInProjects.emit();
  }
}
