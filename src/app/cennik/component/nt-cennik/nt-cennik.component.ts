import { Component } from '@angular/core';

@Component({
  selector: 'nt-nt-cennik',
  templateUrl: './nt-cennik.component.html',
  styleUrls: ['./nt-cennik.component.scss']
})
export class NtCennikComponent {
  priceListOnSiteConfig: PriceListConfig[] = [{
    title: 'Diagnoza logopedyczna',
    price: 240,
    duration: 90
  }, {
    title: 'Diagnoza neurologopedyczna',
    price: 240,
    duration: 90
  }, {
    title: 'Terapia logopedyczna',
    price: 140,
    duration: 45
  }, {
    title: 'Terapia neurologopedyczna',
    price: 140,
    duration: 45
  }, {
    title: 'Terapia ręki - diagnoza',
    price: 240,
    duration: 90
  }, {
    title: 'Terapia ręki',
    price: 140,
    duration: 90
  },]

  priceListAwayConfig: PriceListConfig[] = [{
    title: 'Diagnoza logopedyczna',
    price: 300,
    duration: 90
  }, {
    title: 'Diagnoza neurologopedyczna',
    price: 300,
    duration: 90
  }, {
    title: 'Terapia logopedyczna',
    price: 230,
    duration: 45
  }, {
    title: 'Terapia neurologopedyczna',
    price: 230,
    duration: 45
  },]
}


type PriceListConfig = {
  title: string,
  price: number,
  duration: number,
}
