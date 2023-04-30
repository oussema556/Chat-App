import {Component, Input, OnInit} from '@angular/core';
import {MessageModel} from "../../models/messageModel";

@Component({
  selector: 'chat-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit{
    messageDemo: MessageModel = {
      id: "1",
      content : 'this is a really random message nothing will happen',
      sender: {
        id: "1",
        image: "https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/68.png",
        name: "Oussama Bejaoui",
        profileUrl: "#",
      },
      sentDate: new Date(),
    }

    @Input('message') message: MessageModel = this.messageDemo;

  ngOnInit(): void {
  }
}
