import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainBodyComponent } from './components/main-body/main-body.component';
import { Obj1Component } from './components/main-body/page/obj1/obj1.component';
import { Obj2Component } from './components/main-body/page/obj2/obj2.component';
import { Obj3Component } from './components/main-body/page/obj3/obj3.component';

@NgModule({
  declarations: [
    AppComponent,
    MainBodyComponent,
    Obj1Component,
    Obj2Component,
    Obj3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
