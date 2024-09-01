import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { NtOMnieComponent } from './component/nt-omnie/nt-omnie.component';
import { NtMainPageRoutingModule } from './nt-main-page.routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
    declarations: [
        NtOMnieComponent
    ],
    exports: [],
    imports: [
        CommonModule,
        NtMainPageRoutingModule,
        SharedModule,
        NgOptimizedImage
    ]
})
export class NtMainPageModule {
}
