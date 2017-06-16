import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent, AboutComponent,
         AboutHomeComponent, AboutItemComponent } from './primaryComponents/components.component';
import { ROUTES } from './app.routes';
import { GroupComponent } from './groupComponents/group.component';
import { ChildComponent1,
         ChildComponent2,
         ChildComponent3 } from './groupComponents/childs/childs.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    AboutHomeComponent,
    AboutItemComponent,
    GroupComponent,
    ChildComponent1,
    ChildComponent2,
    ChildComponent3
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
