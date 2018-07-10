import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';
import {InvestorsService} from '../app/investors/investor/investors-service';
import {MessageService} from './component/shared/messageService';
import {ProjectService} from './projects/services/projects.service';


@NgModule({

  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule

  ],
  declarations: [AppComponent],
  providers: [InvestorsService, MessageService, ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
