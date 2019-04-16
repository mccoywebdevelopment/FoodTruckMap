import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { FoodTruckDriverComponent } from './food-truck-driver/food-truck-driver.component';
import { RegisterComponent } from './food-truck-driver/register/register.component';
import { LoginComponent } from './food-truck-driver/login/login.component';
import { TruckDriverDashboardComponent } from './food-truck-driver/truck-driver-dashboard/truck-driver-dashboard.component';
import { ClientComponent } from './client/client.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { MatButtonModule, MatToolbarModule, MatSidenavModule, MatIconModule,
  MatListModule, MatCardModule, MatFormFieldModule, MatInputModule, MatMenuModule, MatTabsModule,
   MatOptionModule, MatAutocompleteModule } from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import { MapListingsComponent } from './client/map-listings/map-listings.component';
import { ItemComponent } from './client/map-listings/item/item.component';
import { OptionsComponent } from './client/map-listings/options/options.component';
import { SearchBarComponent } from './client/map-listings/options/search-bar/search-bar.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    FoodTruckDriverComponent,
    RegisterComponent,
    LoginComponent,
    TruckDriverDashboardComponent,
    ClientComponent,
    HeaderComponent,
    MapListingsComponent,
    ItemComponent,
    OptionsComponent,
    SearchBarComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    MatMenuModule,
    MatTabsModule,
    MatAutocompleteModule,
    MatOptionModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
