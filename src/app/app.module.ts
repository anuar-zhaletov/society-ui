import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StatisticService } from './service/statistic.service';
import {StatisticComponent} from './statistic/statistic.component';
import { ActionComponent } from './action/action.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    StatisticComponent,
    ActionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    StatisticService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
