import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { WorkerCardComponent } from './worker-card/worker-card.component';
import { ResultsComponent } from './results/results.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { WorkerDashboardComponent } from './worker-dashboard/worker-dashboard.component';
import { FeaturedWorkersComponent } from './featured-workers/featured-workers.component';
import { AuthComponent } from './auth/auth.component';
import { CertificationComponent } from './certification/certification.component';
import { ReviewComponent } from './review/review.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    HomeComponent,
    WorkerCardComponent,
    ResultsComponent,
    LoginComponent,
    ProfileComponent,
    WorkerDashboardComponent,
    FeaturedWorkersComponent,
    AuthComponent,
    CertificationComponent,
    ReviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
