import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {MessageModel} from "../../models/message.model";
import {UserModel} from "../../../../shared/models/user.model";
import {ConversationModel} from "../../models/conversation.model";

@Component({
  selector: 'chat-conversation-header',
  templateUrl: './conversation-header.component.html',
  styleUrls: ['./conversation-header.component.scss']
})
export class ConversationHeaderComponent implements OnInit{

  @Input('conversation') conversation: ConversationModel;
  conversationHeader= {
    id: "1",
    image: "assets/images/default.jpg",
    name: "Flen",
    status: "online",
  }

  ngOnInit(): void {
    console.log(this.conversation);
  }



}
