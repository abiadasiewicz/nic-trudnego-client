import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NtUslugiComponent} from './component/nt-uslugi/nt-uslugi.component';


export const uslugiModuleRoutes: Routes = [{
    path: '',
    component: NtUslugiComponent,
    pathMatch: 'full'
}]

@NgModule({
    imports: [RouterModule.forChild(uslugiModuleRoutes)],
    exports: [RouterModule],
})
export class NtUslugiRoutingModule {
}
