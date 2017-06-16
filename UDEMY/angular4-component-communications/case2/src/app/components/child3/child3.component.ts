import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.scss']
})
export class Child3Component implements OnInit {
    myValue: number = 0;

    @Output() eventToParent: EventEmitter<number> = new EventEmitter<number>();

    msgToParent() {
        let value:number;
        value = Math.floor((Math.random() * 100) + 1);
        this.eventToParent.next(value);
    }

    constructor() { }

    ngOnInit() {
        setInterval(():void => {this.msgToParent()},2000);
     }

}
