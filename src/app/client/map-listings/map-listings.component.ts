import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-listings',
  templateUrl: './map-listings.component.html',
  styleUrls: ['./map-listings.component.css']
})
export class MapListingsComponent implements OnInit {
  items = [{name: "Chris", age: 10}, {name: "Chris", age: 10}];
  constructor() { }

  ngOnInit() {
  }

}
