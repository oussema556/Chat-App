import {UserModel} from "../../../shared/models/user.model";
import {MessageModel} from "./message.model";

export interface ConversationModel{
  _id: string;
  users: UserModel[];
  pseudos?:[
    {
      userid: string,
      content: string
    }
  ],
  messages: MessageModel[];
  media: string[];
  otherPerson?: UserModel;

}
