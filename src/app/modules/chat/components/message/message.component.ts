import {Component, Input, OnInit} from '@angular/core';
import {MessageModel} from "../../models/message.model";
import {ChatService} from "../../services/chat.service";

@Component({
  selector: 'chat-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit{

    @Input('message') message: MessageModel;
  constructor(private chatService: ChatService) {
  }
  ngOnInit(): void {
  }
}
