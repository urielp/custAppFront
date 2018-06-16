import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';
import {LayoutModule} from './layout/layout.module';
import {LayoutComponent} from './layout/layout.component';
import {HeaderComponent} from './layout/components/header/header.component';
import { InvestorListComponent } from './investors/investor-list/investor-list.component';
import { InvestorComponent } from './investors/investor/investor.component';
import {InvestorsService} from '../app/investors/investor/investors-service';
import { InvestorsComponent } from './investors/investors.component';


@NgModule({

  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule

  ],
  declarations: [AppComponent],
  providers: [InvestorsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
