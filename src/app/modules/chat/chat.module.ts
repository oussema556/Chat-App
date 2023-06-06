import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './containers/chat/chat.component';
import { ProfileSectionComponent } from './components/profile-section/profile-section.component';
import { ManageContactSectionComponent } from './components/manage-contact-section/manage-contact-section.component';
import { ActivityComponent } from './containers/activity/activity.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { MessageComponent } from './components/message/message.component';
import { ConversationComponent } from './containers/conversation/conversation.component';
import { ConversationHeaderComponent } from './components/conversation-header/conversation-header.component';
import { ConversationMessagesComponent } from './components/conversation-messages/conversation-messages.component';
import { ConversationFooterComponent } from './components/conversation-footer/conversation-footer.component';
import { ActivityHeaderComponent } from './components/activity-header/activity-header.component';
import { ActivityBodyComponent } from './components/activity-body/activity-body.component';
import { ActivityFooterComponent } from './components/activity-footer/activity-footer.component';
import { SideSectionComponent } from './containers/side-section/side-section.component';
import { SideSectionHeaderComponent } from './components/side-section-header/side-section-header.component';
import { SideSectionBodyComponent } from './components/side-section-body/side-section-body.component';
import {FormsModule} from "@angular/forms";
import {SocketIoConfig, SocketIoModule} from "ngx-socket-io";
import { RecentMessagesListComponent } from './components/recent-messages-list/recent-messages-list.component';
import { RecentMessagesWidgetComponent } from './components/recent-messages-widget/recent-messages-widget.component';
import { RecentCallsListComponent } from './components/recent-calls-list/recent-calls-list.component';
import { RecentCallsWidgetComponent } from './components/recent-calls-widget/recent-calls-widget.component';
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";

const config: SocketIoConfig = { url: 'http://localhost:3000' };


@NgModule({
  declarations: [
    ChatComponent,
    ProfileSectionComponent,
    ManageContactSectionComponent,
    ActivityComponent,
    MessageComponent,
    ConversationComponent,
    ConversationHeaderComponent,
    ConversationMessagesComponent,
    ConversationFooterComponent,
    ActivityHeaderComponent,
    ActivityBodyComponent,
    ActivityFooterComponent,
    SideSectionComponent,
    SideSectionHeaderComponent,
    SideSectionBodyComponent,
    RecentMessagesListComponent,
    RecentMessagesWidgetComponent,
    RecentCallsListComponent,
    RecentCallsWidgetComponent,
  ],
  imports: [
    SocketIoModule.forRoot(config),
    CommonModule,
    FontAwesomeModule,
    FormsModule,
    RouterOutlet,
    RouterLinkActive,
    RouterLink
  ]
})
export class ChatModule { }
