import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    private cont:number = 0;
    private msgFromChild3:string;

    msgToChild1:string = `To CHILD-1 from parent / ${this.cont}`;
    msgToChild2:string = `To CHILD-2 from parent / ${this.cont}`;

    eventFromChild3( msg ) {
        this.msgFromChild3 = String(msg);
    }

    ngOnInit() { }

 }
