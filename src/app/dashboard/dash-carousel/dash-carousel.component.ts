import { Component, OnInit } from '@angular/core';

import { timer } from 'rxjs';

@Component({
  selector: 'app-dash-carousel',
  templateUrl: './dash-carousel.component.html',
  styleUrls: ['./dash-carousel.component.css']
})
export class DashCarouselComponent implements OnInit {

  MAX_SEGS_IMAGE = 20;
  MAX_IMAGES = 6;
  
  currentIndex : number;
  imagePath : string;
  images: string[] =[
    "assets/images/amarillo.png",
    "assets/images/azul.png",
    "assets/images/meh.png",
    "assets/images/morado.png",
    "assets/images/rosa.png",
    "assets/images/verde.png"
  ]

  constructor() {
    this.currentIndex = 0;
    this.imagePath = "assets/images/azul.png";
  }
  

  ngOnInit() {
    setInterval(() => {
    this.imagePath = this.images[this.currentIndex++];
    if(this.currentIndex == this.MAX_IMAGES){
      this.currentIndex = 0;
    }
    }, this.MAX_SEGS_IMAGE*1000);
  }


}


