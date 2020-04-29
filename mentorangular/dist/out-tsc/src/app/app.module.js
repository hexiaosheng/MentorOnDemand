import { __decorate } from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { UserHomeComponent } from './component/user-home/user-home.component';
import { MentorHomeComponent } from './component/mentor-home/mentor-home.component';
import { UserCurtrainingsComponent } from './component/user-curtrainings/user-curtrainings.component';
import { UserComptrainingsComponent } from './component/user-comptrainings/user-comptrainings.component';
import { MentorCurtrainingsComponent } from './component/mentor-curtrainings/mentor-curtrainings.component';
import { MentorComptrainingsComponent } from './component/mentor-comptrainings/mentor-comptrainings.component';
import { UserNotificationsComponent } from './component/user-notifications/user-notifications.component';
import { MentorNotificationsComponent } from './component/mentor-notifications/mentor-notifications.component';
import { MentorSkillsComponent } from './component/mentor-skills/mentor-skills.component';
import { UserSearchComponent } from './component/user-search/user-search.component';
import { AdminHomeComponent } from './component/admin-home/admin-home.component';
import { AdminTechnologiesComponent } from './component/admin-technologies/admin-technologies.component';
import { AdminUsersComponent } from './component/admin-users/admin-users.component';
import { AdminPaymentsComponent } from './component/admin-payments/admin-payments.component';
import { AdminParametersComponent } from './component/admin-parameters/admin-parameters.component';
let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
        declarations: [
            AppComponent,
            LoginComponent,
            UserHomeComponent,
            MentorHomeComponent,
            UserCurtrainingsComponent,
            UserComptrainingsComponent,
            MentorCurtrainingsComponent,
            MentorComptrainingsComponent,
            UserNotificationsComponent,
            MentorNotificationsComponent,
            MentorSkillsComponent,
            UserSearchComponent,
            AdminHomeComponent,
            AdminTechnologiesComponent,
            AdminUsersComponent,
            AdminPaymentsComponent,
            AdminParametersComponent
        ],
        imports: [
            BrowserModule,
            AppRoutingModule,
            ReactiveFormsModule,
            HttpClientModule,
            FormsModule
        ],
        providers: [],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map