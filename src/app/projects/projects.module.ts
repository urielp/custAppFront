import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import {ProjectComponent} from './project/project.component';
import {ProjectsRoutingModule} from './projects-routing';
import {ProjectsComponent} from './projects.component';

@NgModule({
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  declarations: [
    ProjectComponent,
    ProjectsComponent

  ]
})
export class ProjectsModule {}
