import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FruitsComponent } from './fruits/fruits.component';

import { MyService } from './my-service.service';

@NgModule({
  declarations: [
    AppComponent,
    FruitsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [MyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
