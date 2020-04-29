import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { UserHomeComponent } from './component/user-home/user-home.component';
import { MentorHomeComponent } from './component/mentor-home/mentor-home.component';
import { UserSearchComponent } from './component/user-search/user-search.component';
import { UserNotificationsComponent } from './component/user-notifications/user-notifications.component';
import { UserCurtrainingsComponent } from './component/user-curtrainings/user-curtrainings.component';
import { UserComptrainingsComponent } from './component/user-comptrainings/user-comptrainings.component';
import { MentorNotificationsComponent } from './component/mentor-notifications/mentor-notifications.component';
import { MentorCurtrainingsComponent } from './component/mentor-curtrainings/mentor-curtrainings.component';
import { MentorComptrainingsComponent } from './component/mentor-comptrainings/mentor-comptrainings.component';
import { MentorSkillsComponent } from './component/mentor-skills/mentor-skills.component';
import { AdminHomeComponent } from './component/admin-home/admin-home.component';
import { AdminUsersComponent } from './component/admin-users/admin-users.component';
import { AdminPaymentsComponent } from './component/admin-payments/admin-payments.component';
import { AdminParametersComponent } from './component/admin-parameters/admin-parameters.component';
import { AdminTechnologiesComponent } from './component/admin-technologies/admin-technologies.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'user-home', component: UserHomeComponent },
  { path: 'user-search', component: UserSearchComponent },
  { path: 'user-notifications', component: UserNotificationsComponent },
  { path: 'user-curtrainings', component: UserCurtrainingsComponent },
  { path: 'user-comptrainings', component: UserComptrainingsComponent },
  { path: 'mentor-home', component: MentorHomeComponent },
  { path: 'mentor-notifications', component: MentorNotificationsComponent },
  { path: 'mentor-curtrainings', component: MentorCurtrainingsComponent },
  { path: 'mentor-comptrainings', component: MentorComptrainingsComponent },
  { path: 'mentor-skills', component: MentorSkillsComponent },
  { path: 'admin-technologies', component: AdminTechnologiesComponent },
  { path: 'admin-users', component: AdminUsersComponent },
  { path: 'admin-payments', component: AdminPaymentsComponent },
  { path: 'admin-home', component: AdminHomeComponent },
  { path: 'admin-parameters', component: AdminParametersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
