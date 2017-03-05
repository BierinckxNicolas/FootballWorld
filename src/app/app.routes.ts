import { Route } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';

export const routes: Route[] = [
	{ path: '', component: HomeComponent },
	{ path: 'admin', component: AdminComponent },
];