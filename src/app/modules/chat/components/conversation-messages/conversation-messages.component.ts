import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ChatService} from "../../services/chat.service";
import {ActivatedRoute} from "@angular/router";
import {ConversationModel} from "../../models/conversation.model";
import {logMessages} from "@angular-devkit/build-angular/src/builders/browser-esbuild/esbuild";
import {MessageModel} from "../../models/message.model";

@Component({
  selector: 'chat-conversation-messages',
  templateUrl: './conversation-messages.component.html',
  styleUrls: ['./conversation-messages.component.scss']
})
export class ConversationMessagesComponent implements OnInit{


  @Input('conversation') conversation: ConversationModel;
  constructor(private chatService: ChatService) {
  }

  ngOnInit() {
    this.chatService.newMessage().subscribe((data: MessageModel)=>{
      console.log(data);
      this.conversation?.messages.push(data)
    },err=>{
      console.log(err)
    })
  }


}
