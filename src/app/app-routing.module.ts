import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsPageComponent } from './components/products/details-page/details-page.component';
import { HomeComponent } from './components/home/home.component';
import { OverviewComponent } from './components/products/overview/overview.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'products', component: OverviewComponent },
  { path: 'products/:category', component: OverviewComponent },
  { path: 'details', component: DetailsPageComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
