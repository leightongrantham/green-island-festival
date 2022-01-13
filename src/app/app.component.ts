import { Component, OnInit, ViewChild } from '@angular/core';
import {Location} from '@angular/common';
import { ImageCarouselComponent } from './image-carousel/image-carousel.component';
import { AnimationType } from './image-carousel/animations';
import { Slide } from './interfaces/carousel.interface';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    @ViewChild(ImageCarouselComponent) carousel: ImageCarouselComponent;

    title = 'Green Island Festival';
    isHome = false;
    toggleNav = false;
    date = (new Date()).getFullYear();
    animationType = AnimationType.Fade;

    animationTypes = [
        {
            name: 'Fade',
            value: AnimationType.Fade
        },
    ];

    slides: Slide[] = [
        {
            src:
                'assets/images/SLN01039-132.jpg'
        },
        {
            src:
                'assets/images/SLN01141-210.jpg'
        },
        {
            src:
                'assets/images/SLN01174-23.jpg'
        },
        {
            src:
                'assets/images/SLN01974.JPG'
        }
    ];

    setToggleNav = () => {
        this.toggleNav = !this.toggleNav;
    }

    constructor(private location: Location) {
    }

    ngOnInit(): void {
        if (!this.location.path()) {
            this.isHome = true;
        }
    }

    setAnimationType(type): void {
        this.animationType = type.value;
        setTimeout(() => {
            this.carousel.onNextClick();
        });
    }
}
