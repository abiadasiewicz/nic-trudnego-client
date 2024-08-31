import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NtOfertaComponent} from './component/nt-oferta/nt-oferta.component';


export const ofertaModuleRoutes: Routes = [{
    path: '',
    component: NtOfertaComponent,
    pathMatch: 'full'
}]

@NgModule({
    imports: [RouterModule.forChild(ofertaModuleRoutes)],
    exports: [RouterModule],
})
export class NtOfertaRoutingModule {
}
