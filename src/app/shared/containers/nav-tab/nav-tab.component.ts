import {Component, OnInit} from '@angular/core';
import {ChatService} from "../../../modules/chat/services/chat.service";
import {ConversationModel} from "../../../modules/chat/models/conversation.model";

@Component({
  selector: 'app-nav-tab',
  templateUrl: './nav-tab.component.html',
  styleUrls: ['./nav-tab.component.scss']
})
export class NavTabComponent implements OnInit{

  constructor(private chatService: ChatService) {
  }

  lastConversationId: string;

  getMsg(){
    this.chatService.getRecentMessages().subscribe(
      (
        res: {
          conversations: ConversationModel[]
        })=>{
          this.lastConversationId= res.conversations[res.conversations.length - 1]?._id;
      }
    )
  }

  ngOnInit(): void {
    this.getMsg()
  }
}
