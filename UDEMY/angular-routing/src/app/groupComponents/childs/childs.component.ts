import { Component, Input } from '@angular/core';
import { giveMeRandom } from './../../classes';
import { MyService } from './../../services/my-service.service';
import { Logged } from './../../definitions';

let lapse:number = 300;

//****************************CHILD*1*****************************************
@Component({
  selector: 'app-child-1',
  template: `<div class="main">
                <p>{{value}}</p>
                <p class="smallMePlease">{{msgFromParent}}</p>
            </div>`,
  styleUrls: ['./childs.component.scss'],
})
export class ChildComponent1  {
    msgFromParent:string;

    @Input()
        set child1_var(value:string) {
            this.msgFromParent = (value && value.trim()) || 'No msg come along';
        }
        get child1_var() {
            return this.msgFromParent;
        }

    value:number = 0;
    constructor() {
        setInterval( () => {
            if( giveMeRandom( .55 )) this.value++;
        }, lapse);
    }
    ngOnInit() { }
}
//****************************CHILD*2*****************************************
@Component({
    selector: 'app-child-2',
    template: `<div class="main">
                    <p>{{value}}</p>
                    <p class="smallMePlease">{{child2_var}}</p>
    </div>`,
    styleUrls: ['./childs.component.scss'],
})
export class ChildComponent2  {
    @Input() child2_var: string;

    value:number = 0;
    constructor(private ms: MyService) {
        setInterval( () => {
            if( giveMeRandom( .6 )) this.value++;
        }, lapse);
    }
    ngOnInit() {
        this.ms.getLogged().subscribe((logged:Logged) => {
            console.log(`CHILD-2 - Observable says: ${logged.email}`)
        })
    }
}
//****************************CHILD*3*****************************************
@Component({
    selector: 'app-child-3',
    template: `<div class="main">
    <p>{{value}}</p>
    </div>`,
    styleUrls: ['./childs.component.scss'],
})
export class ChildComponent3  {
    value:number = 0;
    constructor(private ms: MyService) {
        setInterval( () => {
            if( giveMeRandom( .65 )) this.value++;
        }, lapse);
    }
    ngOnInit() {
        this.ms.getLogged().subscribe((logged:Logged) => {
            this.value+=10;
            console.log(`CHILD-3 - Observable says: ${logged.email}`)
        })
    }
}
