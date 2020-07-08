import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { NgForm } from '@angular/forms';
import { SET_LOCATION } from '../location-reducer';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  loc: string;
  //@Output()
  // searchEvent = new EventEmitter
  constructor(private store: Store<any>) { }

  ngOnInit() {
  }

  search(searchForm: NgForm) {
    if (searchForm.invalid) {
      return;
    }
    this.store.dispatch({ type: SET_LOCATION, payload: this.loc });
  }

  toggleSearch(){
    const searchContainer = document.getElementById('search-container')
    this.toggleClass(searchContainer, 'open');
  }
  private hasClass(element, className){
    return element.classList.contains(className)
  }
  private toggleClass(element, className){
    this.hasClass(element, className) ? element.classList.remove(className): element.classList.add(className);
  }
}
