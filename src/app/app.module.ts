import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { NtMainPageModule } from './main-page/nt-main-page.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FieldsetModule } from 'primeng/fieldset';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    NtMainPageModule,
    SharedModule,
    BrowserAnimationsModule,
    FieldsetModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [FieldsetModule]
})
export class AppModule { }
