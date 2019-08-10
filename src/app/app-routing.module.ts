import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResultsComponent } from './results/results.component';
import { ProfileComponent } from './profile/profile.component';
import { WorkerDashboardComponent } from './worker-dashboard/worker-dashboard.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path: '/results',
    component: ResultsComponent
  },
  {
    path: '/profile',
    component: ProfileComponent
  },
  {
    path: '/worker-dashboard',
    component: WorkerDashboardComponent
  },
  {
    path: '/login',
    component: LoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
