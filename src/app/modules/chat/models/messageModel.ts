import {SenderModel} from "./senderModel";

export interface MessageModel{
  id: string;
  content: string;
  sender: SenderModel;
  sentDate: Date;
}
