import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
 
  public allMessages=[
    {
      messageId:1,
      from:"Varun Singh",
      message:"Catch up on posts from Jayasakthi Sundhararajan and Aashi Bhargava",
      date:"2019-10-20T12:20:47.854Z"
    },
    {
      messageId:2,
      from:"Veena Singh",
      message:"Write Your Way to a Life You Love",
      date:"2019-10-20T12:20:47.854Z"
    },
    {
      messageId:3,
      from:"Sanjay Keshav",
      message:"Stay Organized (and Creating) with Airtable",
      date:"2019-10-20T12:20:47.854Z"
    },
    {
      messageId:4,
      from:"Yesha Singh",
      message:"Catch up on posts from Jayasakthi Sundhararajan and Aashi Bhargava",
      date:"2019-10-20T12:20:47.854Z"
    },
    {
      messageId:5,
      from:"Varun sasha",
      message:"Catch up on posts from Jayasakthi Sundhararajan and Aashi Bhargava",
      date:"2019-10-20T12:20:47.854Z"
    }

  ]
  
public getAllMessages(){
  return this.allMessages;
}


  
  public login(userInfo: User){
    localStorage.setItem('ACCESS_TOKEN', "access_token");
  }

  public isLoggedIn(){
    return localStorage.getItem('ACCESS_TOKEN') !== null;

  }

  public logout(){
    localStorage.removeItem('ACCESS_TOKEN');
  }
}
