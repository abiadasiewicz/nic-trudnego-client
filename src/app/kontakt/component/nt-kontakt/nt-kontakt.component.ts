import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'nt-nt-kontakt',
  templateUrl: './nt-kontakt.component.html',
  styleUrls: ['./nt-kontakt.component.scss']
})
export class NtKontaktComponent implements OnInit {
  zoom = 12;
  // @ts-ignore
  center: google.maps.LatLngLiteral | google.maps.LatLng;
  options: google.maps.MapOptions = {
    mapTypeId: 'hybrid',
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    maxZoom: 15,
    minZoom: 8,
  };

  ngOnInit() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
    });
  }

  // zoomIn() {
  //   if (this.zoom < this.options?.maxZoom) this.zoom++;
  // }
  //
  // zoomOut() {
  //   if (this.zoom > this.options?.minZoom) this.zoom--;
  // }
}
