import { Component } from '@angular/core';
import { MyClass } from './shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MyClass]
})
export class AppComponent {
    private msgFromChild3:string;

    msgToChild1:string = `To CHILD-1 from PARENT =`;
    msgToChild2:string = `To CHILD-2 from PARENT`;

    eventFromChild3( msg ) {
        this.msgFromChild3 = String(msg);
    }

    ngOnInit() {
        setInterval(():void => {
            let value:number;
            value = MyClass.getRandomNumber();
            this.msgToChild1 = `To CHILD-1 from PARENT =
            ${String(value)}`},2500);
     }

 }
