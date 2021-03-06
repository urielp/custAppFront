import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProjectComponent} from './project/project.component';
import {ProjectsComponent} from './projects.component';
import {ProjectsListComponent} from './projects-list/projects-list.component';
import {ProjectdetailsComponent} from './project/projectdetails/projectdetails.component';




const routes: Routes = [
  {
    path: '', component: ProjectsComponent,
    children: [
      {path: 'project/:id', component: ProjectdetailsComponent},
      {path: 'projectList', component: ProjectsListComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule {
}
