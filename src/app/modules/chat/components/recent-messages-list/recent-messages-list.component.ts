import {Component, OnInit} from '@angular/core';
import {ChatService} from "../../services/chat.service";
import {MessageModel} from "../../models/message.model";
import {ConversationModel} from "../../models/conversation.model";

@Component({
  selector: 'app-recent-messages-list',
  templateUrl: './recent-messages-list.component.html',
  styleUrls: ['./recent-messages-list.component.scss']
})
export class RecentMessagesListComponent implements OnInit{
  recentMessages: ConversationModel[];
  /*recentMessages: MessageModel[]=[
    {
      id: "0",
      sender: {
        id: "0",
        picture: "assets/images/default.jpg",
        name: "Flen Foulen",
      },
      sentDate: new Date(),
      content: "slm ena random msg wlh la3dhim"
    },
    {
      id: "0",
      sender: {
        id: "0",
        picture: "assets/images/default.jpg",
        name: "Flen Foulen",
      },
      sentDate: new Date(),
      content: "slm ena random msg wlh la3dhim"
    },
    {
      id: "0",
      sender: {
        id: "0",
        picture: "assets/images/default.jpg",
        name: "Flen Foulen",
      },
      sentDate: new Date(),
      content: "slm ena random msg wlh la3dhim"
    },
    {
      id: "0",
      sender: {
        id: "0",
        picture: "assets/images/default.jpg",
        name: "Flen Foulen",
      },
      sentDate: new Date(),
      content: "slm ena random msg wlh la3dhim mlzhjrglmzfhjmlhrfszjlmùhsfjshfùmhsdfimùjdfùlmdfimùsfhj"
    },
    {
      id: "0",
      sender: {
        id: "0",
        picture: "assets/images/default.jpg",
        name: "Flen Foulen",
      },
      sentDate: new Date(),
      content: "slm ena random msg wlh la3dhim"
    },
  ];*/
  constructor(private chatService: ChatService) {
  }
    ngOnInit() {
      this.getRecentMessages();
    }

    getRecentMessages(){
      this.chatService.getRecentMessages().subscribe(
        (res:any)=>{
          this.recentMessages=res.conversations;
          this.recentMessages.forEach(conversation =>{
            conversation.users.forEach(user =>{
              if (user._id != localStorage.getItem('id')){
                conversation.otherPerson= user;
              }
            })
          })
        },
        err=>{
          console.log(err);
        }
      )
    }
}
