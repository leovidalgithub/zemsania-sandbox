import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.scss']
})
export class Child2Component implements OnInit {
    myValue: number = 0;
    myMsgFromParent: string;

    @Input()
    set msgFromParent(value:string) {
        this.myMsgFromParent = (value && value.trim()) || 'No msg come along';
        this.myMsgFromParent+= ` with EXTRA info`;
    }
    get msgFromParent() {
        return this.myMsgFromParent;
    }


    constructor() { }

    ngOnInit() { }

}
