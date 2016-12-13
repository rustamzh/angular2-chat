import {Injectable, OnInit} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import * as io from 'socket.io-client'

@Injectable()
export class SocketserviceService implements OnInit {
  private url = 'https://calm-mesa-45289.herokuapp.com:80';
  private socket;

  constructor() {
    this.socket = io(this.url);
  }

  ngOnInit() {

  }

  adduser(user) {
    this.socket.emit('adduser', user);
  }

  sendMessage(message) {
    this.socket.emit('addmessage', message);
  }

  getMessages() {
    // this.socket = io(this.url);
    let observable = new Observable(observer => {

      this.socket.on('newmessage', (data) => {
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    })
    return observable;
  }

  getNewUsers() {
    // this.socket = io(this.url);
    let observable = new Observable(observer => {

      this.socket.on('updateUsers', (users) => {
        observer.next(users);
      });
      return () => {
        this.socket.disconnect();
      };
    })
    return observable;

  }

  getWritingUsers():Observable<String[]>{
    let observable = new Observable<String[]>(observer => {

      this.socket.on('updateWritingUsers', (writingusers) => {
        observer.next(writingusers);
      });
      return () => {
        this.socket.disconnect();
      };
    })
    return observable;
  }

  userIsWriting(user, bool:boolean) {
    if(bool){
      this.socket.emit('add-writing', user);
    }
    else {
      this.socket.emit('drop-writing', user);

    }
  }
}
