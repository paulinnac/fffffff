import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash-date',
  templateUrl: './dash-date.component.html',
  styleUrls: ['./dash-date.component.css']
})
export class DashDateComponent implements OnInit {

  clock = Date.now();
  constructor() { }

  ngOnInit() {
    setInterval(() => {
      this.clock = Date.now();
    }, 1000);
  }

}

