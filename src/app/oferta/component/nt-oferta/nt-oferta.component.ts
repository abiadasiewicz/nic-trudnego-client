import { Component } from '@angular/core';

@Component({
  selector: 'nt-nt-oferta',
  templateUrl: './nt-oferta.component.html',
  styleUrls: ['./nt-oferta.component.scss']
})
export class NtOfertaComponent {
  offerCardConfig: OfferCardConfig[] = [{
    iconSrc: 'R.svg',
    text: 'Nieprawidłowo wymawia niektóre głoski'
  }, {
    iconSrc: 'low_level.svg',
    text: 'Nabywa mowę wolnej niż jego rówieśnicy'
  }, {
    iconSrc: 'mouth.svg',
    text: 'Oddycha przez usta lub śpi z otwartą buzią'
  }, {
    iconSrc: 'general_surgery.svg',
    text: 'Może potrzebować korekty wędzidełka języka'
  }, {
    iconSrc: 'fruits.svg',
    text: 'Ma trudności z przyjmowaniem pokarmów lub je wybiórczo'
  }, {
    iconSrc: 'tooth.svg',
    text: 'Jest przed leczeniem ortodontycznym'
  }, {
    iconSrc: 'tongue.svg',
    text: 'Wysuwa język między zęby podczas mówienia'
  }, {
    iconSrc: 'hand.svg',
    text: 'Ma trudności z pisaniem, łapaniem piłki czy używaniem sztućców'
  },]




}

type OfferCardConfig = {
  iconSrc: string,
  text: string,
}
