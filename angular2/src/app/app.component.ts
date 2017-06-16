import { Component, OnInit } from '@angular/core';
import { MyService } from './my-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent {
  // title = 'app';
  title:string;
  constructor(private _MyService: MyService ) {}

  ngOnInit() {
      this.title = this._MyService.sayHello();
      console.log(this._MyService.sayHello());
  }
}
