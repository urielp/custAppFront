import {Component, OnDestroy, OnInit} from '@angular/core';
import Project from '../../models/project.model';
import {ActivatedRoute, Router} from '@angular/router';
import {ProjectService} from '../services/projects.service';
import Investor from '../../models/investor.model';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent implements OnInit,OnDestroy {

  projects: Project[];
  pages: any;
  total: any;
  limit: any;
  constructor(private projectService: ProjectService , private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.projectService.getProjetcs().subscribe((results) => {
        if (results.success) {
          this.projects = results.data.docs as Project [];
          this.pages = results.data.pages;
          this.total = results.data.total;
          this.limit = results.data.limit;
          console.log( this.projects);
        }
    });
  }

  ngOnDestroy() {
  }
}
