import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NtOfertaRoutingModule } from './nt-oferta-routing.module';
import { NtOfertaComponent } from './component/nt-oferta/nt-oferta.component'; import { CardModule } from 'primeng/card';


@NgModule({
  declarations: [
    NtOfertaComponent
  ],
  imports: [
    CommonModule,
    NtOfertaRoutingModule,
    CardModule
  ]
})
export class NtOfertaModule { }
