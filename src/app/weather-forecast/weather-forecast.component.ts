import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { WeatherServiceService } from '../service/weather-service.service';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.css']
})
export class WeatherForecastComponent implements OnInit {

  loc$: Observable<string>;
  loc: string;
  currentWeather: any = <any>{};
  forecast: any = <any>{};
  msg: string;

  constructor(
    private store: Store<any>,
    private weatherServ: WeatherServiceService,
  ) {
    this.loc$ = store.pipe(select('loc'));
    this.loc$.subscribe(loc => {
      this.loc = loc;
      this.searchWeather(loc);
    })
  }


  ngOnInit() {
  }

  searchWeather(loc: string) {
    this.msg = '';
    this.currentWeather = {};
    this.weatherServ.getCurrentWeather(loc)
      .subscribe(res => {
        this.currentWeather = res;
      }, err => {

      }, () => {
        this.searchForecast(loc);
      })
  }

  searchForecast(loc: string) {
    this.weatherServ.getForecast(loc)
      .subscribe(res => {
        this.forecast = res;
      }, err => {

      })
  }

  resultFound() {
    return Object.keys(this.currentWeather).length > 0;
  }

}
