import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NtKontaktRoutingModule } from './nt-kontakt-routing.module';
import { NtKontaktComponent } from './component/nt-kontakt/nt-kontakt.component';
import { ReactiveFormsModule } from '@angular/forms';
import {GoogleMap} from '@angular/google-maps';


@NgModule({
  declarations: [NtKontaktComponent],
    imports: [
        CommonModule,
        NtKontaktRoutingModule,
        ReactiveFormsModule,
        GoogleMap
    ]
})
export class NtKontaktModule { }
