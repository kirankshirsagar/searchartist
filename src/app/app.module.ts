import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchartistComponent } from './searchartist/searchartist.component';
import { ArtistlistComponent } from './artistlist/artistlist.component';
import{ArtistlistService} from './artistlist/artistlist.service';
@NgModule({
  declarations: [
    AppComponent,
    SearchartistComponent,
    ArtistlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    BrowserAnimationsModule
  ],
  providers: [ArtistlistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
