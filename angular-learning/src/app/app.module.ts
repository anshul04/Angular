import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentTestComponent } from './component-test/component-test.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { ServiceLearningComponent } from './service-learning/service-learning.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentTestComponent,
    InterpolationComponent,
    ServiceLearningComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
