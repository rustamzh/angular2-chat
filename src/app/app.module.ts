import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WritingusersPipe } from './writingusers.pipe';
import { TimestampconvPipe } from './timestampconv.pipe';


@NgModule({
  declarations: [
    AppComponent,
    WritingusersPipe,
    TimestampconvPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
