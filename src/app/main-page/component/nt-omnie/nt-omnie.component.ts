import {Component, Renderer2} from '@angular/core';
import {TwoRowsCarouselData} from '../../../shared/component/nt-carousel/nt-carousel.component';
import {Meta, Title} from '@angular/platform-browser';

@Component({
    selector: 'nt-omnie',
    templateUrl: './nt-omnie.component.html',
    styleUrls: ['./nt-omnie.component.scss'],
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
        firstDescription: 'Wybiórczość pokarmowa o podłożu sensoryczno-motorycznym',
        secondDescription: 'Metoda Ruchu Rozwijającego Weroniki Sherborne'
    }, {
        firstDescription: 'Psychomotoryka empowermentu',
        secondDescription: 'Masaż logopedyczny i terapia manualna kompleksu ustno-twarzowego w praktyce',
    },]


    constructor(private meta: Meta, private title: Title) {
        this.title.setTitle('Weronika Biadasiewicz - Neurologopeda | Logopeda dla dzieci i dorosłych')
        this.meta.addTags([
            {
                name: 'description',
                content: 'Weronika Biadasiewicz - neurologopeda, specjalistka w terapii zaburzeń mowy. Prowadzę zajęcia dla dzieci z wadami wymowy oraz dorosłych z trudnościami komunikacyjnymi. Sprawdź moją ofertę i skontaktuj się.'
            },
            {
                name: 'keywords',
                content: 'neurologopeda, logopeda, terapia mowy, zaburzenia mowy, terapia dla dzieci, terapia logopedyczna, dyslalia, opóźniony rozwój mowy, autyzm, spektrum autyzmu, terapia dla dorosłych, wybiórczość pokarmowa'
            }, {
                name: 'robots',
                content: 'index, follow'
            },
            {
                property: 'og:title',
                content: 'Weronika Biadasiewicz - Neurologopeda'
            },
            {
                property: 'og:description',
                content: 'Neurologopeda specjalizujący się w terapii zaburzeń mowy dla dzieci i dorosłych.'
            },
            {
                property: 'og:image',
                content: 'assets/img/werkapoziomo.jpg'
            },
            {
                property: 'og:url',
                content: "nic-trudnego.pl"
            },
        ])
    }

    scrollToCoursesSection() {
        document.getElementById('courses')?.scrollIntoView();
    }
}
