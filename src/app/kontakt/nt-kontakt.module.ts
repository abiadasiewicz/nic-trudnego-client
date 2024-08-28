import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NtKontaktRoutingModule} from './nt-kontakt-routing.module';
import {NtEmailFormComponent} from './component/nt-email-form/nt-email-form.component';
import {NtKontaktComponent} from './component/nt-kontakt/nt-kontakt.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
    declarations: [NtEmailFormComponent, NtKontaktComponent],
    imports: [
        CommonModule,
        NtKontaktRoutingModule,
        ReactiveFormsModule,
        MatInputModule,
        MatButtonModule
    ]
})
export class NtKontaktModule {
}
