import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadlineComponent } from './headline/headline.component';
import { HttpClientModule } from '@angular/common/http';
import { TcnewsapiService } from './service/tcnewsapi.service'
@NgModule({
  declarations: [
    AppComponent,
    HeadlineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ TcnewsapiService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
