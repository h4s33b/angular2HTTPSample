import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Http,HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';

import { ExternalDataService } from './externalData.service';
import { AppComponent }  from './app.component';


@NgModule({
  imports: [BrowserModule,HttpModule,FormsModule],
  declarations: [AppComponent],
  providers: [ExternalDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
