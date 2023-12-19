import { Routes } from '@angular/router';
import { AllOfficersComponent } from './officers/all-officers/all-officers.component';
import { AddOfficerComponent } from './officers/add-officer/add-officer.component';
import { EditOfficerComponent } from './officers/edit-officer/edit-officer.component';
import { AddPostingComponent } from './officers/add-posting/add-posting.component';
import { ViewOfficerPostingComponent } from './officers/view-officer-posting/view-officer-posting.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login/login.component';
import { LogoutComponent } from './login/logout/logout.component';
import { WelcomeComponent } from './welcome/welcome.component';

export const routes: Routes = [
    { path: "home", component: HomeComponent },
    { path: "welcome", component: WelcomeComponent },
    { path: "login", component: LoginComponent },
    { path: "logout", component: LogoutComponent },
    { path: "officer-list", component: AllOfficersComponent },
    { path: "add-officer", component: AddOfficerComponent },
    { path: "add-posting/:id", component: AddPostingComponent },
    { path: "edit-officer/:id", component: EditOfficerComponent, pathMatch: "prefix" },
    { path: "view-officer-posting/:id", component: ViewOfficerPostingComponent, pathMatch: "prefix" }
];