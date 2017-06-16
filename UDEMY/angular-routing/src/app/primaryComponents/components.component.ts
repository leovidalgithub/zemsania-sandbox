import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { MyClass, thisFunction } from './../classes';
import { MyService } from './../services/my-service.service';
import { Logged } from './../definitions';

@Component({
  selector: 'app-home',
  template: `<h2>Home</h2>`,
  providers: [MyService]
})
export class HomeComponent {
    constructor(private ms: MyService) {}
    ngOnInit() {
        console.log(`HomeComponent OnInit : ${this.ms.fn()}`);
    }
 }

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent { }

@Component({ // main route '' component of AboutComponent
  selector: 'about-home',
  template: `<h3>About Home</h3> `
})
export class AboutHomeComponent {
    constructor() {}
}

@Component({
  selector: 'about-item',
  template: `<h3>About Item Id: {{id}}</h3>
  <button type="button" (click)="fn()">Go!!!</button>
  `
})
export class AboutItemComponent {
    id:any;
    paramSub:any;

    private _MyClass:MyClass;
    constructor(private activatedRoute: ActivatedRoute) { // ActivatedRoute injecting
        this._MyClass = new MyClass();
        this._MyClass.brand = 'Ford';
    }
    ngOnInit(){
        this.paramSub = this.activatedRoute.params.subscribe(params => this.id = parseInt(params['id'],10));
    }
    ngOnDestroy(){
        this.paramSub.unsubscribe();
        console.log('unsubscribe');
    }
    fn() {
        console.log(this._MyClass.getBrand());
        console.log(thisFunction());
    }
 }
