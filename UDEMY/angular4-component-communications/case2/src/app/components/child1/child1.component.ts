import { Component, OnInit } from '@angular/core';
import { ShareDataService, IData } from './../../shared/';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.scss']
})
export class Child1Component implements OnInit {
    private myValue: number = 0;
    private myMsg: number;

    constructor(private ss:ShareDataService) { }

    ngOnInit() {
        this.ss.getLogged(1).subscribe((data:IData) => {
            this.myMsg = data.msg;
            this.myValue++;
        });
    }

}
