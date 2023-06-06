import {Component, OnInit} from '@angular/core';
import {ChatService} from "../../services/chat.service";
import {ConversationModel} from "../../models/conversation.model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'chat-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.scss']
})
export class ConversationComponent implements OnInit{
  conversation: ConversationModel;
  conversationId: string;
  constructor(private chatService: ChatService,private activatedRoute: ActivatedRoute) {
  }
  ngOnInit(){
    this.activatedRoute.params.subscribe(queryParams =>  {
      this.conversationId= queryParams["id"];
        this.getConversation(this.conversationId)
    })
  }
  getConversation(conversationId: string){
    this.chatService.getConversation(conversationId).subscribe(
      (res:{conversation: ConversationModel})=>{
        this.conversation= res.conversation;
        this.conversation.users.forEach(user =>{
          if (user._id != localStorage.getItem('id')){
            this.conversation.otherPerson= user;
          }
        })
      },
      err =>{
        console.log(err)
      }
    )
  }
}
