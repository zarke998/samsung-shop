import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { HomeComponent } from './home/home.component';
import { PhonesPageComponent } from './phones-page/phones-page.component';

const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "phones", component: PhonesPageComponent},
    {path: "contact", component: ContactPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
