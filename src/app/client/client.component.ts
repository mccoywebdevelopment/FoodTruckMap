import { Component, OnInit } from '@angular/core';
import config from '../../../config/config.json';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  myData = null;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(config.URI).subscribe(data =>{
      this.myData = data;
      console.log(this.myData);
    });
    console.log("Done");
  }

}
