import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResultsComponent } from './results/results.component';
import { ProfileComponent } from './profile/profile.component';
import { WorkerDashboardComponent } from './worker-dashboard/worker-dashboard.component';
import { LoginComponent } from './login/login.component';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path: 'results',
    component: ResultsComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'worker-dashboard',
    component: WorkerDashboardComponent
  },
  {
    path: 'auth',
    component: AuthComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
