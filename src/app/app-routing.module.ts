import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsPageComponent } from './about-us-page/about-us-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { HomeComponent } from './home/home.component';
import { PhoneComponent } from './phone/phone.component';
import { PhonesPageComponent } from './phones-page/phones-page.component';

const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "phones", component: PhonesPageComponent },
    {path: "phones/:id", component: PhoneComponent},
    {path: "contact", component: ContactPageComponent},
    {path: "about", component: AboutUsPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
