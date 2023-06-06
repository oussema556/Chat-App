import {Component, Input} from '@angular/core';
import {ChatService} from "../../services/chat.service";

@Component({
  selector: 'chat-conversation-footer',
  templateUrl: './conversation-footer.component.html',
  styleUrls: ['./conversation-footer.component.scss']
})
export class ConversationFooterComponent {

  content: string="";


  @Input('conversationId') conversationId: string;

  constructor(private chatService: ChatService) {
  }
  onKey(event: any) { // without type info
    this.content = event.target.value;
  }
  sendMessage(){
    this.chatService.sendMessage(this.conversationId,this.content,null).subscribe(
      res=>{

        //console.log(res)
      },
      err => {
        console.log(err)
      }
    );
  }

  }
