import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { Router, RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { MainComponent } from './main/main.component';
import { BindingComponent } from './binding/binding.component';
import { AttributeComponent } from './attribute/attribute.component';

@NgModule({
  declarations: [
    AppComponent,
    InterpolationComponent,
    MainComponent,
    BindingComponent,
    AttributeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
