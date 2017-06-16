import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css']
})
export class FruitsComponent implements OnInit {
    cont:number = 0;
    setPerson = () => {
        console.log('clicked');
    }
    visible = false;
    clase = 'newClass';
    showMe = false;
    serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    enlace = 'http://dolartoday.leovidal.es';
    pressMe() {
        this.visible = !this.visible;
        this.showMe = !this.showMe;
    }

    inputChanged(event) {
        console.log(event.target.value);
    }

    getColor() {
        return this.serverStatus === 'online' ? 'green' : 'red';
    }

    constructor() {
      setInterval( () => {
          this.cont++;
      },1000);
    }

  ngOnInit() {
      console.log('Component loaded!');
  }

}
