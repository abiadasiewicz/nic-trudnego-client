import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NtCennikComponent } from './component/nt-cennik/nt-cennik.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

export const cennikModuleRoutes: Routes = [{
    path: '',
    component: NtCennikComponent,
    pathMatch: 'full'
}]

@NgModule({
    imports: [RouterModule.forChild(cennikModuleRoutes), CommonModule],
    exports: [RouterModule],
    declarations: [
        NtCennikComponent
    ],
})
export class NtCennikModule {
}
