import { Component, OnInit } from '@angular/core';
import { Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';



@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {

  searchTerm = '';
  constructor() {

  }
  ngOnInit() {
  }
  myFunction(value: string){
    alert(value);
  }
}
