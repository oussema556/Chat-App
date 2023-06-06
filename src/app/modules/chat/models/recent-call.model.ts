import {UserModel} from "../../../shared/models/user.model";

export interface RecentCallModel{
  _id: string;
  callDate: Date;
  caller: UserModel;
  callType: string;
}
