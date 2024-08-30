import {Component} from '@angular/core';
import {TwoRowsCarouselData} from '../../../shared/component/nt-carousel/nt-carousel.component';

@Component({
    selector: 'nt-omnie',
    templateUrl: './nt-omnie.component.html',
    styleUrls: ['./nt-omnie.component.scss']
})
export class NtOMnieComponent {
    kursy: TwoRowsCarouselData[] = [{
        firstDescription: 'Ocena funkcjonalna traktu ustno-twarzowego. Mioterapia – podejście autorskie',
        secondDescription: 'Strategiczna metoda usprawniania realizacji fonemów w dyslalii obwodowej SMURF'
    }, {
        firstDescription: 'Arteterapia sensoryczno-motoryczna PWUPS© poziom I',
        secondDescription: 'Komunikacja alternatywna i wspomagająca'
    }, {
        firstDescription: 'Terapia ręki I i II stopnia. Diagnoza terapia warsztat',
        secondDescription: 'Terapia ręki III stopnia. Grafomotoryka'
    }, {
        firstDescription: 'Psychomotoryka empowermentu',
        secondDescription: 'Metoda Ruchu Rozwijającego Weroniki Sherborne'
    }, {
        firstDescription: 'Masaż logopedyczny i terapia manualna kompleksu ustno-twarzowego w praktyce. Holistyczny program wsparcia pacjenta z wyzwaniami',

    },]

    scrollToCoursesSection() {
        document.getElementById('courses')?.scrollIntoView();
    }
}
