import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.scss']
})
export class Child1Component implements OnInit, OnChanges {

    myValue: number = 0;
    @Input()
        msgFromParent:string;

    ngOnChanges(changes: SimpleChanges) {
        console.log(`ngOnChanges says: new msg from Parent =
            ${changes.msgFromParent.currentValue}`);
    }

    constructor() { }

    ngOnInit() { }

}
