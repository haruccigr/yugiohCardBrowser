import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardNavigationComponent } from './card-navigation/card-navigation.component';
import { CardContentComponent } from './card-content/card-content.component';
import { HttpClientModule } from '@angular/common/http';
import { GetCardService } from './get-card.service';

@NgModule({
  declarations: [
    AppComponent,
    CardNavigationComponent,
    CardContentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [GetCardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
