import { Component, OnInit } from '@angular/core';
import { User } from './../../../shared/model/user.model';
import { SessionService } from './../../../shared/services/session.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: User;

  constructor(private sessionService: SessionService) { }

  ngOnInit() {
    this.user = this.sessionService.getUser();
  
    this.sessionService.onUserChanges()
      .subscribe((user) => this.user = user);
  }

}
