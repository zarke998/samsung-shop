import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { BannerComponent } from './banner/banner.component';
import { HomeComponent } from './home/home.component';
import { TopProductsComponent } from './top-products/top-products.component';
import { BestPhoneComponent } from './best-phone/best-phone.component';
import { TeamListComponent } from './team-list/team-list.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PhoneListComponent } from './phone-list/phone-list.component';
import { PhonesPageComponent } from './phones-page/phones-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderNavComponent,
    BannerComponent,
    HomeComponent,
    TopProductsComponent,
    BestPhoneComponent,
    TeamListComponent,
    FooterComponent,
    PhoneListComponent,
    PhonesPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
