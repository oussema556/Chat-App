import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpRequest} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {MessageModel} from "../models/message.model";
import {RecentCallModel} from "../models/recent-call.model";
import {ConversationModel} from "../models/conversation.model";
import {Socket, io} from "socket.io-client";
import {environment} from "../../../../environments/environment.development";

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private socket= io(environment.API);

  constructor(private http: HttpClient) {
  }


  getRecentMessages(): Observable<{conversations: ConversationModel[] }>{
    return this.http.get<{conversations: ConversationModel[] }>(`${environment.API_URL}/conversation/`);
  }

  getRecentCalls(): Observable<RecentCallModel[]>{
    const id= localStorage.getItem('id') ?? "";
    return this.http.get<RecentCallModel[]>(`${environment.API_URL}/getRecentCalls/${id}`);
  }

  getConversation(conversationId: string): Observable<{conversation: ConversationModel}>{
    return this.http.get<{conversation: ConversationModel}>(`${environment.API_URL}/conversation/${conversationId}`);
  }





  // SEND MESSAGE
  sendMessage(conversationId:string, content: string, files: any){
    const fd = new FormData()
    fd.append('conversationId', conversationId)
    fd.append('content', content)
    if (files) {
      for (const key of Object.keys(files)) {
        if (files[key].type.includes('image')) {
          fd.append('images', files[key]);
        }
        else if (files[key].type.includes('video')) {
          fd.append('videos', files[key]);
        }
      }

    }
    this.socket.emit('send-message',fd);
    return this.http.post(`${environment.API_URL}/conversation`, fd);
  }


  newMessage() {
    let message: BehaviorSubject<any> = new BehaviorSubject({});
    this.socket.on('send-message', (data:MessageModel)=>{
      console.log(data);
      console.log("-------------------")
      message.next(data);
    });
    return message.asObservable();
  }
}
