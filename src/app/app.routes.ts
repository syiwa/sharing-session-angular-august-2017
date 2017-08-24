import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { MainComponent } from './main/main.component';
import { BindingComponent } from './binding/binding.component';
import { AttributeComponent } from './attribute/attribute.component';

export const ROUTES: Routes = [
      {
        path: '',
        component: MainComponent,
        pathMatch: 'full'
      },
      {
        path: 'interpolation',
        component: InterpolationComponent
      },
      {
        path: 'binding',
        component: BindingComponent
      },
      {
        path: 'attribute',
        component: AttributeComponent
      }
];
