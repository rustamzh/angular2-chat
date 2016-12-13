import {Component, OnInit, OnDestroy, AfterViewInit, ElementRef} from '@angular/core';
import {SocketserviceService} from './socketservice.service';
import {Observable} from "rxjs";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SocketserviceService]
})
export class AppComponent implements OnInit, OnDestroy, AfterViewInit {
  message: String;
  alert = false;
  messagesObs: any;
  usersObs: any;
  wrUsObs: Observable<String[]>; // Users are writing observable
  user: String;
  users = [];
  messages = [];
  result: String = '';

  constructor(private socketservice: SocketserviceService, private elementRef: ElementRef) {
  }

  ngOnInit() {
    this.messagesObs = this.socketservice.getMessages().subscribe(message => {
      this.messages.push(message);
    });
    this.usersObs = this.socketservice.getNewUsers().subscribe((user: any[]) => {
      this.users = user;
    });
    this.wrUsObs = this.socketservice.getWritingUsers();

  }

  ngAfterViewInit() {
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.innerHTML = "$(document).ready(function(){$('#myModal').modal('show');}); ";
    this.elementRef.nativeElement.appendChild(s);
  }

  ngOnDestroy() {
    this.messagesObs.unsubscribe();
    this.usersObs.unsubscribe();
  }

  sendMessage() {
    this.socketservice.sendMessage({username: this.user, text: this.message});
    this.message = "";
  }

  addUser() {
    if (this.users.indexOf(this.user) == -1) {
      this.socketservice.adduser(this.user);

      var s = document.createElement("script");
      s.type = "text/javascript";
      s.innerHTML = "$('#myModal').modal('hide');";
      this.elementRef.nativeElement.appendChild(s);
    }
    else {
      this.alert = true;
      this.user = '';
    }
  }

  userIsWriting(bool: boolean) {

    if (bool) {
      this.socketservice.userIsWriting(this.user, bool);
    }
    else {
      this.socketservice.userIsWriting(this.user, bool);
    }
  }

}
