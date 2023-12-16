import { Routes } from '@angular/router';
import { AllOfficersComponent } from './officers/all-officers/all-officers.component';
import { HttpClientModule } from '@angular/common/http';
import { AddOfficerComponent } from './officers/add-officer/add-officer.component';

export const routes: Routes = [
    {
        path: "officer-list", component: AllOfficersComponent,
    },
    { path: "add-officer", component: AddOfficerComponent }
];