import { Component } from '@angular/core';
import {ChatService} from "../../services/chat.service";
import {RecentCallModel} from "../../models/recent-call.model";



@Component({
  selector: 'app-recent-calls-list',
  templateUrl: './recent-calls-list.component.html',
  styleUrls: ['./recent-calls-list.component.scss']
})
export class RecentCallsListComponent {
  recentCalls: RecentCallModel[];
  /*recentCalls: RecentCallModel[]=[

    {
      id: "0",
      callDate: new Date(),
      callType: 'incoming',
      caller: {
        id: "0",
        name: "Flen",
        picture: "assets/images/default.jpg"
      }
    },
    {
      id: "0",
      callDate: new Date(),
      callType: 'incoming',
      caller: {
        id: "0",
        name: "Flen",
        picture: "assets/images/default.jpg"
      }
    },
    {
      id: "0",
      callDate: new Date(),
      callType: 'incoming',
      caller: {
        id: "0",
        name: "Flen",
        picture: "assets/images/default.jpg"
      }
    },
    {
      id: "0",
      callDate: new Date(),
      callType: 'incoming',
      caller: {
        id: "0",
        name: "Flen",
        picture: "assets/images/default.jpg"
      }
    },
    {
      id: "0",
      callDate: new Date(),
      callType: 'incoming',
      caller: {
        id: "0",
        name: "Flen",
        picture: "assets/images/default.jpg"
      }
    },
  ];*/
  constructor(private chatService: ChatService) {
  }
  ngOnInit() {
    this.getRecentCalls();
  }

  getRecentCalls(){
    this.chatService.getRecentCalls().subscribe(
      (res: RecentCallModel[])=>{
        this.recentCalls=res;
      },
      err=>{
        console.log(err);
      }
    )
  }
}
