import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NtOfertaRoutingModule } from './nt-oferta-routing.module';
import { NtOfertaComponent } from './component/nt-oferta/nt-oferta.component';


@NgModule({
  declarations: [
    NtOfertaComponent
  ],
  imports: [
    CommonModule,
    NtOfertaRoutingModule
  ]
})
export class NtOfertaModule { }
