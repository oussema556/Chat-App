import {Component, Input} from '@angular/core';
import {ConversationModel} from "../../models/conversation.model";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-recent-messages-widget',
  templateUrl: './recent-messages-widget.component.html',
  styleUrls: ['./recent-messages-widget.component.scss']
})
export class RecentMessagesWidgetComponent {
  @Input('recentMessage') recentMessage: ConversationModel;
  constructor(private activatedRoute: ActivatedRoute, private  router: Router) {
  }
  getConversationPath() {
    this.router.navigateByUrl(`/chat/(sideSection:recent-messages//messagesSection:conversation/${this.recentMessage._id})`)
    //this.router.navigate(['chat',{outlets: {sideSection: ['recent-messages'],mainMessages:['conversation',this.recentMessage._id]}}],{replaceUrl: true});
  }
}
