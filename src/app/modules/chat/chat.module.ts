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
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ]
})
export class ChatModule { }
