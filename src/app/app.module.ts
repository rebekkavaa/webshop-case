import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { NavbarComponent } from './components/@shared/navbar/navbar.component';
import { OverviewComponent } from './components/products/overview/overview.component';
import { CardItemComponent } from './components/@shared/card-item/card-item.component';
import { DetailsPageComponent } from './components/products/details-page/details-page.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ShoppingBasketComponent } from './components/shopping-basket/shopping-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    OverviewComponent,
    CardItemComponent,
    DetailsPageComponent,
    HomeComponent,
    ShoppingBasketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
