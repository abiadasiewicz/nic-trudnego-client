import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NtFooterComponent} from './component/nt-footer/nt-footer.component';
import {NtHeaderComponent} from './component/nt-header/nt-header.component';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {NtBorderedFieldComponent} from './component/bordered-field/nt-bordered-field.component';
import {NtPageNotFoundComponent} from './component/page-not-found/nt-page-not-found.component';


@NgModule({
    declarations: [NtFooterComponent, NtHeaderComponent, NtBorderedFieldComponent, NtPageNotFoundComponent],
    imports: [
        CommonModule,
        RouterLink,
        RouterLinkActive
    ],
    exports: [NtHeaderComponent, NtFooterComponent, NtBorderedFieldComponent, NtPageNotFoundComponent]
})
export class SharedModule {
}
