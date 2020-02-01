import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { DrinkComponent } from './drink/drink.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule, MatInputModule, MatCardModule, MatButtonModule,
  MatChipsModule, MatCheckboxModule, MatIconModule, MatProgressBarModule,
  MatExpansionModule, MatAutocompleteModule, MatSlideToggleModule, MatTabsModule,
  MatRadioModule, MatListModule, MatButtonToggleModule } from '@angular/material';
@NgModule({
  declarations: [
    AppComponent,
    DrinkComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    // Material
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatChipsModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatProgressBarModule,
    MatExpansionModule,
    MatAutocompleteModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatRadioModule,
    MatListModule,
    MatButtonToggleModule,

    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
