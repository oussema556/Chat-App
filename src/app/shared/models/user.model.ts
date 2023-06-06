export interface UserModel{
  _id?: string;
  name?: string;
  surname?: string;
  email?: string;
  username?: string;
  tel?: string;
  joinDate?: Date;
  profileImg?: string;
  connection?: {
    lastVisit: string,
    status: boolean,
  },
  address?: string;
  role?: string;
  friends?: any;
  notifications?:{
    message: string,
    sender: string,
    created_at: Date,
  }
  picture?: string;
}
