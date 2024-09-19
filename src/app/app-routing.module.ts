import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NtPageNotFoundComponent } from './shared/component/page-not-found/nt-page-not-found.component';
import { NtCookieInfoComponent } from './shared/component/nt-cookie-info/nt-cookie-info.component';

export const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'o-mnie',
        pathMatch: 'full'
    },
    {
        path: 'o-mnie',
        loadChildren: () =>
            import('./main-page/nt-main-page.module').then((module) => module.NtMainPageModule),
    }, {
        path: 'oferta',
        loadChildren: () =>
            import('./oferta/nt-oferta.module').then((module) => module.NtOfertaModule),
    }, {
        path: 'cennik',
        loadChildren: () =>
            import('./cennik/nt-cennik.module').then((module) => module.NtCennikModule),
    }, {
        path: 'kontakt',
        loadChildren: () =>
            import('./kontakt/nt-kontakt.module').then((module) => module.NtKontaktModule),
    },
    {
        path: 'cookie-policy',
        component: NtCookieInfoComponent,
    },
    {
        path: '**',
        component: NtPageNotFoundComponent,
    },
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, {
            scrollPositionRestoration: 'top',
            anchorScrolling: 'enabled',
        }),
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
