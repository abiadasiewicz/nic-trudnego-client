import { Component } from '@angular/core';

@Component({
  selector: 'nt-header',
  templateUrl: './nt-header.component.html',
  styleUrls: ['./nt-header.component.scss']
})
export class NtHeaderComponent {
  collapse() {
    const element = document.getElementById('navbarToggler');
    element?.classList.add('collapsed')
  }
}
