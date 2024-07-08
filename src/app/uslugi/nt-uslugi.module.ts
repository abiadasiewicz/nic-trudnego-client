import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NtUslugiRoutingModule } from './nt-uslugi-routing.module';
import { NtUslugiComponent } from './component/nt-uslugi/nt-uslugi.component';


@NgModule({
  declarations: [
    NtUslugiComponent
  ],
  imports: [
    CommonModule,
    NtUslugiRoutingModule
  ]
})
export class NtUslugiModule { }
