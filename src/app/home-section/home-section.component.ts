import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-home-section',
  templateUrl: './home-section.component.html',
  styleUrls: ['./home-section.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeSectionComponent implements OnInit {

  loc$: Observable<string>;
  loc: string;

  constructor(private store: Store<any>) {
    this.loc$ = store.pipe(select('loc'));
    this.loc$.subscribe(loc => {
      console.log(loc);
      this.loc = loc;
    })
  }

  ngOnInit() {  }
}
