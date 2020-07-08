import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UvComponent } from './uv/uv.component';
import { WeatherForecastComponent } from './weather-forecast/weather-forecast.component';
import { HomeSectionComponent } from './home-section/home-section.component';
import { WeatherCurrentComponent } from './weather-current/weather-current.component';
import { AlertsComponent } from './alerts/alerts.component';
//
import { MatIconModule} from '@angular/material/icon';

import { MatButtonModule} from '@angular/material/button';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatInputModule} from '@angular/material/input';
import { MatTabsModule} from '@angular/material/tabs';
import { MatCardModule} from '@angular/material/card';
import { MatDividerModule} from '@angular/material/divider';
import { MatListModule} from '@angular/material/list';
import { HttpClientModule} from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { locationReducer } from './location-reducer';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    UvComponent,
    WeatherForecastComponent,
    HomeSectionComponent,
    WeatherCurrentComponent,
    AlertsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    //
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    StoreModule.forRoot({
      loc: locationReducer
    }),
    FormsModule,
    MatInputModule,
    MatTabsModule,
    MatCardModule,
    HttpClientModule,
    MatDividerModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
