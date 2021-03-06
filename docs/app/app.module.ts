import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ArtistModule } from 'artist';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ArtistModule.forRoot({ outputColorFormat: 'rgb' })],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
