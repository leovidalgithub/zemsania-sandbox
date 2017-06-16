import { Component, OnInit } from '@angular/core';
import { ShareDataService, IData } from './../../shared/';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.scss']
})
export class Child2Component implements OnInit {
    private myValue: number = 0;
    private myMsg: number;

    constructor(private ss:ShareDataService) { }

    ngOnInit() {
        this.ss.getLogged(2).subscribe((data:IData) => {
            this.myMsg = data.msg;
            this.myValue++;
        });
    }

}
