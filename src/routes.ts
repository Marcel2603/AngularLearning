import {Routes} from "@angular/router";
import {AppComponent} from "./app/app.component";
import {CreationComponent} from "./app/creation/creation.component";

export const routeConfig: Routes = [
  {
    path: "",
    component: AppComponent,
    data: { title: 'Home' }
  },  {
    path: "home",
    loadComponent: () => import('./app/creation/creation.component').then(m => m.CreationComponent)
  },
  {
    path: '**',
    redirectTo: ""
  }
];
