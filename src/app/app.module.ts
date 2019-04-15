import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FoodTruckDriverComponent } from './food-truck-driver/food-truck-driver.component';
import { RegisterComponent } from './food-truck-driver/register/register.component';
import { LoginComponent } from './food-truck-driver/login/login.component';
import { TruckDriverDashboardComponent } from './food-truck-driver/truck-driver-dashboard/truck-driver-dashboard.component';
import { ClientComponent } from './client/client.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FoodTruckDriverComponent,
    RegisterComponent,
    LoginComponent,
    TruckDriverDashboardComponent,
    ClientComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
