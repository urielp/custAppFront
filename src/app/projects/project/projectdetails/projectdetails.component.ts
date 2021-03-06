import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import Project from '../../../models/project.model';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Subscription} from 'rxjs/index';
import {ProjectService} from '../../services/projects.service';
import Investor from '../../../models/investor.model';

@Component({
  selector: 'app-projectdetails',
  templateUrl: './projectdetails.component.html',
  styleUrls: ['./projectdetails.component.scss']
})
export class ProjectdetailsComponent implements OnInit,OnDestroy {

  public sliders: Array<any> = [];
  parametersSubscription: Subscription;
  private projectDetails: any;
  private tempProjetcObject;
  constructor(private projectService: ProjectService , private route: ActivatedRoute, private router: Router) {
    this.sliders.push(
      {
        imagePath: 'assets/comprare-casa-da-impresa-di-costruzione.jpg',
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
        imagePath: 'assets/residential-top5e_750xx600-338-0-62.jpg',
        label: 'Third slide label',
        text:
          'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
      }
    );
  }

  ngOnInit() {
    this.parametersSubscription = this.route.params.subscribe(
      (params: Params) => {
        //this.projectDetails = new Project();
        //Object.assign(this.projectDetails, <Project> params );
        this.getInvestorById(params.id);
      }
    );
  }
ngOnDestroy() {
    this.parametersSubscription.unsubscribe();
}

getInvestorById(id) {
    this.projectService.getProjectById(id).subscribe( (results) => {
    if (!results.error) {
    this.tempProjetcObject = new Project();
      Object.assign(this.tempProjetcObject, results.data as Project);
    }
    console.log(this.tempProjetcObject);
  });
}
}
