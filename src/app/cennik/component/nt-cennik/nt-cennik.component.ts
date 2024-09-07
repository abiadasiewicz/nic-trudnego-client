import { Component } from '@angular/core';

@Component({
  selector: 'nt-nt-cennik',
  templateUrl: './nt-cennik.component.html',
  styleUrls: ['./nt-cennik.component.scss']
})
export class NtCennikComponent {
  priceListOnSiteConfig: PriceListConfig[] = [{
    title: 'Diagnoza logopedyczna',
    price: 200,
    duration: 90
  }, {
    title: 'Diagnoza logopedyczna',
    price: 200,
    duration: 90
  }, {
    title: 'Terapia logopedyczna',
    price: 120,
    duration: 45
  }, {
    title: 'Terapia neurologopedyczna',
    price: 120,
    duration: 45
  }, {
    title: 'Terapia ręki - diagnoza',
    price: 200,
    duration: 90
  }, {
    title: 'Terapia ręki',
    price: 120,
    duration: 90
  },]

  priceListAwayConfig: PriceListConfig[] = [{
    title: 'Diagnoza logopedyczna',
    price: 250,
    duration: 90
  }, {
    title: 'Diagnoza logopedyczna',
    price: 250,
    duration: 90
  }, {
    title: 'Terapia logopedyczna',
    price: 200,
    duration: 45
  }, {
    title: 'Terapia neurologopedyczna',
    price: 200,
    duration: 45
  },]
}


type PriceListConfig = {
  title: string,
  price: number,
  duration: number,
}