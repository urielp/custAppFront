import {Component, Input, OnInit, OnDestroy, ViewChild, EventEmitter, Output} from '@angular/core';
import Investor from '../../../models/investor.model';
import {InvestorsService} from '../investors-service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {CommentsModalComponent} from '../../../component/comments-modal/comments-modal.component';
import {MessageService} from '../../../component/shared/messageService';
import {ProjectService} from '../../../projects/services/projects.service';
import Project from '../../../models/project.model';
import {ProjectcarouselComponent} from '../../../projects/projectcarousel/projectcarousel.component';

@Component({
  selector: 'app-investor-profile',
  templateUrl: './investor-profile.component.html',
  styleUrls: ['./investor-profile.component.scss']
})
export class InvestorProfileComponent implements OnInit, OnDestroy {

  @ViewChild(CommentsModalComponent) commentsdDetails: CommentsModalComponent ;
  @ViewChild(ProjectcarouselComponent) associatedModalDetails: ProjectcarouselComponent ;
  investorObject: Investor;
  _projects;
  test: any;
  prametersSubscription: Subscription;
  id: string;
  constructor(private investorService: InvestorsService, private projectService: ProjectService ,
private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.prametersSubscription = this.route.params.subscribe(
      (params: Params) => {
        this.id = params.id;
        this.getInvestorData();
      }
    );
  }
  ngOnDestroy() {
    this.prametersSubscription.unsubscribe();
  }

  getInvestorData() {
    this.investorService.getSingleInvestorById(this.id).subscribe(
      data => {
        this.investorObject = new Investor();
        Object.assign(this.investorObject, data.data as Investor);
        this.getProjectTest();
        console.log(this.investorObject.investorAssociatedProjects);
      });
  }
getProjectTest() {
    this.getinvestorAssociatedProjects(this.investorObject.investorAssociatedProjects);
}
  getinvestorAssociatedProjects(projects) {
      if (projects && projects.length > 0 ) {
        this.projectService.getinvestorAssociatedProjects(projects).subscribe((data) => {
          this._projects = data.data.map((prject) => {
            return Object.assign(new Project(), prject as Project);
          });
          //this.openAssociatedProjectsModal();
        });
      } else {
       // this.openAssociatedProjectsModal();
      }
  }
  openExtendedDetailsModal() {
      this.commentsdDetails.altOpen(this.investorObject.comments);
  }
  openAssociatedProjectsModal() {
   this.associatedModalDetails.altOpen(this._projects);
  }
  // adding a comment
  addComment(id) {
    this.commentsdDetails.addComment(this.investorObject._id);
  }
  // navigating back from previous page
  return() {
    this.router.navigate(['investorsList'], { relativeTo: this.route.parent});
  }
  onCommentsChange(comments) {
    this.investorObject.comments = comments;
    this.investorService.updateInvestorComments(this.investorObject).subscribe((results) => {
    });
  }
}
