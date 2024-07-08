import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NtOMnieComponent} from './component/nt-omnie/nt-omnie.component';

export const oMnieModuleRoutes: Routes = [{
  path: '',
  component: NtOMnieComponent,
  pathMatch: 'full'
}]

@NgModule({
    imports: [RouterModule.forChild(oMnieModuleRoutes)],
    exports: [RouterModule],
})
export class NtMainPageRoutingModule {
}
