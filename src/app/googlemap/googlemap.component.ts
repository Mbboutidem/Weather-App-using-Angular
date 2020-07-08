import { Component, OnInit } from '@angular/core';
import { WeatherServiceService } from '../service/weather-service.service';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-googlemap',
  templateUrl: './googlemap.component.html',
  styleUrls: ['./googlemap.component.css']
})
export class GooglemapComponent implements OnInit {
  // latitude = 49.1951;
  // longitude = 16.6068;
  latitude: any;
  longitude: any;
  locationChosen = false;
  loc$: Observable<string>;
  loc: string;
  getmapLocation: any = <any>{};
  msg: any;

  constructor(
    private serv: WeatherServiceService,
    private store: Store<any>,
  ) {
    this.loc$ = store.pipe(select('loc'));
    this.loc$.subscribe(loc => {
      this.loc = loc;
      this.mapLocation(loc);
    })
  }

  ngOnInit() {
  }
  //set map location
    mapLocation(loc?){
      this.serv.getCurrentWeather(loc).subscribe((res:any) => {
        console.log(res);
        this.getmapLocation = res;
        this.latitude = res.coord.lat;
        this.longitude = res.coord.lon;
        this.locationChosen = true;

      }, err => {
        if(err.error && err.error.message){
          return this.msg = err.error.messgae;

        }
      })
    // this.latitude = event.coords.lat;
    // this.longitude = event.coords.lat;
    // this.locationChosen = true;

  }

  resultFound() {
    return Object.keys(this.getmapLocation).length > 0;
  }

}
