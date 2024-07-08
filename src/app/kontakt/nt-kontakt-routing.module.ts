import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NtKontaktComponent} from './component/nt-kontakt/nt-kontakt.component';

export const KontaktModuleRoutes: Routes = [{
    path: '',
    component: NtKontaktComponent,
    pathMatch: 'full'
}]

@NgModule({
    imports: [RouterModule.forChild(KontaktModuleRoutes)],
    exports: [RouterModule],
})
export class NtKontaktRoutingModule {
}
