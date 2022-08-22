import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { CharactersComponent } from './pages/characters/characters.component';
import { CharactersListComponent } from './pages/characters/characters-list/characters-list.component';
import { CharactersCardComponent } from './pages/characters/characters-card/characters-card.component';
import {ReactiveFormsModule} from "@angular/forms";
import {InfiniteScrollModule} from "ngx-infinite-scroll";

@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
    CharactersListComponent,
    CharactersCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    ReactiveFormsModule,
    InfiniteScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
