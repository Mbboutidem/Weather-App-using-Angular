import { Component, OnInit } from '@angular/core';
import { WeatherServiceService } from '../service/weather-service.service';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';

@Component({
  selector: 'app-weather-current',
  templateUrl: './weather-current.component.html',
  styleUrls: ['./weather-current.component.css']
})
export class WeatherCurrentComponent implements OnInit {

  loc$: Observable<string>;
  loc: string;
  currentWeather: any = <any>{};
  msg: string;

  constructor(
    private store: Store<any>,
    private weatherServ: WeatherServiceService
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
        if (err.error && err.error.message) {
          alert(err.error.message);
          this.msg = err.error.message;
          return;
        }
        alert('Failed to get weather.');
      }, () => {

      })
  }

  resultFound() {
    return Object.keys(this.currentWeather).length > 0;
  }
}
