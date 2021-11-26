import { Component, Input, OnInit } from '@angular/core';
import { transition, trigger, useAnimation } from '@angular/animations';

import { AnimationType, fadeIn, fadeOut } from './animations';
import { Slide } from '../interfaces/carousel.interface';

@Component({
  selector: 'app-image-carousel',
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.scss'],
  animations: [
    trigger('slideAnimation', [
      /* fade */
      transition('void => fade', [
        useAnimation(fadeIn, { params: { time: '500ms' } })
      ]),
      transition('fade => void', [
        useAnimation(fadeOut, { params: { time: '500ms' } })
      ]),
    ])
  ]
})
export class ImageCarouselComponent implements OnInit {
  @Input() slides: Slide[];
  @Input() animationType = AnimationType.Fade;

  currentSlide = 0;

  constructor() {}

  ngOnInit(): void {
    this.preloadImages();
    this.changeImage();
  }

  public onPreviousClick(): void {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
    console.log('previous clicked, new current slide is: ', this.currentSlide);
  }

  public onNextClick(): void {
   this.currentSlide = this.currentSlide + 1;

   console.log(this.slides);
    // this.currentSlide = next === this.slides.length ? 0 : next;
  }

  public changeImage(): void {
    // setInterval(this.onNextClick, 1000);
  }

  public preloadImages(): void {
    for (const slide of this.slides) {
      new Image().src = slide.src;
    }
  }
}
