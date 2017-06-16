import { Component } from '@angular/core';
import { MyClass, ShareDataService, IData } from './shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MyClass, ShareDataService]
})
export class AppComponent {
    private msgFromChild3:string;

    constructor(private ss:ShareDataService) {}

    ngOnInit() {
        setInterval(():void => {
            let child:number = MyClass.getRandomChild();
            let msg = MyClass.getRandomNumber();
            this.ss.setLogged(child,{msg:msg});
        },400);
     }

 }
