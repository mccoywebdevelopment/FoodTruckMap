import { Component, OnInit } from '@angular/core';
import { Item } from './item.model';

@Component({
  selector: 'app-map-listings',
  templateUrl: './map-listings.component.html',
  styleUrls: ['./map-listings.component.css']
})
export class MapListingsComponent implements OnInit {
  items: Item[] = [
    new Item('Hungry Howies',
    'https://images.unsplash.com/reserve/DHHQbqc0RrWVf0uDNe5E_The%20Litte%20Cafe.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80',
    'We deliver all your foods and specials',
     {url: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60', description: 'Our latest addition'},
      '338 E Harvard Ave'),
      new Item('Banna Brew',
      'https://images.unsplash.com/photo-1513640127641-49ba81f8305c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      'We deliver all your foods and specials',
       {url: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60', description: 'Our latest addition'},
       '338 E Harvard Ave'),
       new Item('Banna Brew',
      'https://images.unsplash.com/photo-1519861155730-0b5fbf0dd889?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      'We deliver all your foods and specials',
       {url: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60', description: 'Our latest addition'},
       '338 E Harvard Ave'),
  ];
  constructor() { }

  ngOnInit() {
  }

}
