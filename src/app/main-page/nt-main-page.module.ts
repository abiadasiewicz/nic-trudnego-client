import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NtOMnieComponent} from './component/nt-omnie/nt-omnie.component';
import {NtMainPageRoutingModule} from './nt-main-page.routing.module';


@NgModule({
    declarations: [
        NtOMnieComponent
    ],
    exports: [],
    imports: [
        CommonModule,
        NtMainPageRoutingModule
    ]
})
export class NtMainPageModule {
}
