import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Notification } from 'src/app/model/notification';

@Component({
  selector: 'app-mentor-notifications',
  templateUrl: './mentor-notifications.component.html',
  styleUrls: ['./mentor-notifications.component.css']
})
export class MentorNotificationsComponent implements OnInit {
  items;
  notifications: Array<Notification> = [];
  headers = new HttpHeaders({ 'Content-Type': 'application/json' })

  constructor(private route: ActivatedRoute,
    private http: HttpClient) { }

  ngOnInit(): void {
    this.getNotifications();
  }

  getNotifications() {
    this.notifications = [];
    let userId = JSON.parse(localStorage.getItem('loggedUser'))['id']
    this.http.get('api/user/notifications?userId=' + userId,
      { headers: this.headers, reportProgress: true })
      .subscribe((data: any) => {
        console.log(data);
        data.forEach(element => {
          let notification = new Notification();
          notification.title = element["title"];
          notification.id = element["id"];
          notification.userId = element["userId"];
          notification.content = element["content"];
          this.notifications.push(notification);
        });
        this.items = this.notifications;
      });
  }
}
