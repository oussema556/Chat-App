import {SenderModel} from "./sender.model";
import {UserModel} from "../../../shared/models/user.model";

export interface MessageModel{
  _id: string;
  conversationId?: string;
  available?: boolean;
  seen?: {
    state: boolean,
    seedDate: string;
  };
  images?: string[];

  content?: string;
  sender: UserModel;
  sentDate: Date;
}
