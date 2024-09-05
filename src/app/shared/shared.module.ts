import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { NtFooterComponent } from './component/nt-footer/nt-footer.component';
import { NtHeaderComponent } from './component/nt-header/nt-header.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NtBorderedFieldComponent } from './component/bordered-field/nt-bordered-field.component';
import { NtPageNotFoundComponent } from './component/page-not-found/nt-page-not-found.component';
import { NtCarouselComponent } from './component/nt-carousel/nt-carousel.component';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { CookiesPolicyComponent } from './component/cookies-policy/cookies-policy.component';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { NtCookieInfoComponent } from './component/nt-cookie-info/nt-cookie-info.component';

@NgModule({
    declarations: [NtFooterComponent, NtHeaderComponent, NtBorderedFieldComponent, NtPageNotFoundComponent, NtCarouselComponent, CookiesPolicyComponent, NtCookieInfoComponent],
    imports: [
        CommonModule,
        RouterLink,
        RouterLinkActive,
        CarouselModule,
        TagModule,
        NgOptimizedImage,
        ButtonModule,
        DialogModule
    ],
    exports: [NtHeaderComponent, NtFooterComponent, NtBorderedFieldComponent, NtPageNotFoundComponent, NtCarouselComponent, CookiesPolicyComponent]
})
export class SharedModule {
}
