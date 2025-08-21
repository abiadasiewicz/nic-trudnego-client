import { Component } from '@angular/core';
import * as dayjs from "dayjs";

@Component({
  selector: 'nt-footer',
  templateUrl: './nt-footer.component.html',
  styleUrls: ['./nt-footer.component.scss']
})
export class NtFooterComponent {

  getCurrentYear(): string {
    return dayjs().year().toString();
  }
}
