import { Component, OnInit } from '@angular/core';
import { MyService } from './../services/my-service.service';
import { Logged } from './../definitions';
declare var $:any;

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss'],
  providers: [MyService]
})
export class GroupComponent implements OnInit {

    toMyChild1:string = 'From parent to child1';
    toMyChild2:string = 'To my son #2';

  constructor(private ms: MyService) { }

  setLogged() {
      this.ms.setLogged({email:'leo@leo.com',password:'123'});
  }

  ngOnInit() {
      $('.thisBox').click(function(event) {
          $(this).css('background','#1b9ad0');
      })
  }
}
