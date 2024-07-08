import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NtFooterComponent} from './component/nt-footer/nt-footer.component';
import {NtHeaderComponent} from './component/nt-header/nt-header.component';
import {RouterLink, RouterLinkActive} from '@angular/router';



@NgModule({
  declarations: [NtFooterComponent, NtHeaderComponent],
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive
  ],
  exports: [NtHeaderComponent, NtFooterComponent]
})
export class SharedModule { }
