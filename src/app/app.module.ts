import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { HeaderComponent } from './components/header/header.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { LocationsComponent } from './pages/locations/locations.component';
import { CharactersListComponent } from './pages/characters/characters-list/characters-list.component';
import { CharactersFormComponent } from './pages/characters/characters-form/characters-form.component';
import { CharactersCardComponent } from './pages/characters/characters-card/characters-card.component';
import {ReactiveFormsModule} from "@angular/forms";
import { LocationFormComponent } from './pages/locations/location-form/location-form.component';
import { LocationListComponent } from './pages/locations/location-list/location-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CharactersComponent,
    LocationsComponent,
    CharactersListComponent,
    CharactersFormComponent,
    CharactersCardComponent,
    LocationFormComponent,
    LocationListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
