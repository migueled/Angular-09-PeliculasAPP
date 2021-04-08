import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { movie } from 'src/app/interfaces/cartelera.response';

import Swiper from 'swiper';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit,AfterViewInit {
  
  @Input() movies : movie[];
  private swiper : Swiper;
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    this.swiper = new Swiper('.swiper-container', {
      loop: true
    });
  }

  onNext(){
    this.swiper.slideNext();
  }
  
  onPrevious(){
    this.swiper.slidePrev();
  }

}
