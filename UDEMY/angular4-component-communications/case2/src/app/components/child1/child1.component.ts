import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.scss']
})
export class Child1Component implements OnInit {

    myValue: number = 0;
    @Input() msgFromParent:string;

    constructor() { }

    ngOnInit() { }

}
