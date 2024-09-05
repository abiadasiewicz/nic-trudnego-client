import { Component, Input } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'nt-cookies-policy',
  templateUrl: './cookies-policy.component.html',
  styleUrls: ['./cookies-policy.component.scss']
})
export class CookiesPolicyComponent {

  visible: boolean = true;

  constructor(private cookieService: CookieService) { }

  acceptCookies() {
    this.cookieService.set('cookies_policy_accepted', 'true', 365);
    this.visible = false;
  }
  rejectCookies() {
    this.cookieService.set('cookies_policy_rejected', 'false', 365);
    this.visible = false;
  }
}
