import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'Green Island Festival';
    isHome = false;
    toggleNav = false;
    date = (new Date()).getFullYear();
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
}
