import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { CustomerTestimonialsComponent } from './components/customer-testimonials/customer-testimonials.component';
import { FeaturesComponent } from './components/features/features.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { PricingTablesComponent } from './components/pricing-tables/pricing-tables.component';
import { RouterModule, Routes } from '@angular/router';


const appRoutes: Routes = [
  // routes should be ordered from most specific to least specific.
  { path: '**', redirectTo: '/', }, // wildcard route
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    FeaturesComponent,
    PricingTablesComponent,
    AboutComponent,
    CustomerTestimonialsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
