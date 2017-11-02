import { MainFormModel } from './main-form/main-form.model';
import { MainFormComponent } from './main-form/main-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    MainFormComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule
  ],
  providers: [MainFormModel],
  bootstrap: [AppComponent]
})
export class AppModule { }
