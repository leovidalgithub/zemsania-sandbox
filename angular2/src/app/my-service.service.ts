import { Injectable } from '@angular/core';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class MyService {

  constructor() { }

  sayHello() {
      return 'MyService!';
  }

}