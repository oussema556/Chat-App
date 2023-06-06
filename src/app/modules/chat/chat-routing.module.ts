import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './containers/chat/chat.component';
import {RecentCallsListComponent} from "./components/recent-calls-list/recent-calls-list.component";
import {ConversationComponent} from "./containers/conversation/conversation.component";
import {RecentMessagesListComponent} from "./components/recent-messages-list/recent-messages-list.component";
import {ConversationMessagesComponent} from "./components/conversation-messages/conversation-messages.component";

const routes: Routes = [
  {
    path: "chat",
    component: ChatComponent,
    children: [
      {
        path: 'conversation/:id',
        component: ConversationComponent,
        outlet: "messagesSection",
      },
      {
        path: 'recent-messages',
        component: RecentMessagesListComponent,
        outlet: 'sideSection'
      },
      {
        path: "recent-calls",
        component: RecentCallsListComponent,
        outlet: "sideSection",
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatRoutingModule { }
