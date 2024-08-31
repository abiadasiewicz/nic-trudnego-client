import {Component, Input} from '@angular/core';

@Component({
    selector: 'nt-carousel',
    templateUrl: './nt-carousel.component.html',
    styleUrls: ['./nt-carousel.component.scss']
})
export class NtCarouselComponent {

    @Input()
    items: TwoRowsCarouselData[] = [];

    responsiveOptions;

    constructor() {
        this.responsiveOptions = [
            {
                breakpoint: '1199px',
                numVisible: 3,
                numScroll: 1
            },
            {
                breakpoint: '991px',
                numVisible: 2,
                numScroll: 1
            },
            {
                breakpoint: '767px',
                numVisible: 1,
                numScroll: 1
            }
        ];
    }
}

export type TwoRowsCarouselData = {
    firstDescription: string;
    secondDescription?: string;
}
