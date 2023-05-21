import { Component } from '@angular/core';
import {MessageModel} from "../../models/messageModel";

@Component({
  selector: 'chat-conversation-header',
  templateUrl: './conversation-header.component.html',
  styleUrls: ['./conversation-header.component.scss']
})
export class ConversationHeaderComponent {
  conversationHeader= {
    id: "1",
    image: "https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/68.png",
    name: "Flen",
    status: "online",
  }
}
