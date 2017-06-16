import { Component, OnInit } from '@angular/core';
import { ShareDataService, IData } from './../../shared/';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.scss']
})
export class Child3Component implements OnInit {
    private myValue: number = 0;
    private myMsg: number;

    constructor(private ss:ShareDataService) { }

    ngOnInit() {
        this.ss.getLogged(3).subscribe((data:IData) => {
            this.myMsg = data.msg;
            this.myValue++;
        });
    }

}
