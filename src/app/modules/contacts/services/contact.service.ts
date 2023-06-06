import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserModel} from "../../../shared/models/user.model";
import {environment} from "../../../../environments/environment.development";

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  getUser(userId: string): Observable<UserModel>{
    return this.http.get<UserModel>(`${environment.API_URL}/user/${userId}`);
  }

  searchUsers(keyword){
    return this.http.get(`${environment.API_URL}/user/search-users?term=${keyword}`)
  }

  addFriend(friendId: string) {
    return this.http.post(`${environment.API_URL}/friend/addfriend/${friendId}`,{});
  }

  acceptFriend(friendId:string) {
    return this.http.post(`${environment.API_URL}/friend/accept-request/${friendId}`,{});
  }

  declineFriend(friendId: string){
    return this.http.post(`${environment.API_URL}/friend/decline-friend/${friendId}`,{});
  }

  blockFriend(friendId: string){
    return this.http.post(`${environment.API_URL}/friend/block-friend/${friendId}`,{});
  }

  unblockFriend(friendId:string) {
    return this.http.post(`${environment.API_URL}/friend/unblock-friend/${friendId}`,{});
  }
}
