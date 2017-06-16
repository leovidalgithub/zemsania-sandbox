
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { IData } from './my-class';

@Injectable()
export class ShareDataService {
    private subjectToChild1: Subject<IData> = new Subject<IData>();
    private subjectToChild2: Subject<IData> = new Subject<IData>();
    private subjectToChild3: Subject<IData> = new Subject<IData>();
    constructor() { }

    setLogged(child:number, data: IData): void {
        switch(child) {
            case 1:
                this.subjectToChild1.next(data);
            case 2:
                this.subjectToChild2.next(data);
            case 3:
                this.subjectToChild3.next(data);
            default:
        }
    }

    getLogged(child:number): Observable<IData> {
        switch(child) {
            case 1:
                return this.subjectToChild1.asObservable();
            case 2:
                return this.subjectToChild2.asObservable();
            case 3:
                return this.subjectToChild3.asObservable();
            default:
        }
    }

}
