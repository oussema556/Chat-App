import { Component } from '@angular/core';
import {ConversationModel} from "../../models/conversation.model";

@Component({
  selector: 'chat-activity-body',
  templateUrl: './activity-body.component.html',
  styleUrls: ['./activity-body.component.scss']
})
export class ActivityBodyComponent {
    conversation: ConversationModel ={
      _id: "0",
      users: [
        {
          _id: "0",
          picture: "assets/images/default.jpg",
          name: "Flen",
        },
        {
          _id: "0",
          picture: "assets/images/default.jpg",
          name: "Flen",
        },
      ],
      media: ['assets/images/default.jpg','assets/images/default.jpg','assets/images/default.jpg'],
      messages:[
        {
          _id:"0",
          content:"t blhi bara 3asba 3la rasek",
          sender:{
            _id: "0",
            name:"Flen",
            picture: "assets/images/default.jpg",
          },
          sentDate: new Date(),
        },
        {
          _id:"0",
          content:"Ouuuh 3la zebi",
          sender:{
            _id: "0",
            name:"Flen",
            picture: "assets/images/default.jpg",
          },
          sentDate: new Date(),
        },
        {
          _id:"0",
          content:"Mrigl ay 6h takwira",
          sender:{
            _id: "0",
            name:"Flen",
            picture: "assets/images/default.jpg",
          },
          sentDate: new Date(),
        },
        {
          _id:"0",
          content:"Ouuuh 3la zebi",
          sender:{
            _id: "0",
            name:"Flen",
            picture: "assets/images/default.jpg",
          },
          sentDate: new Date(),
        },
      ]
    };
}
