import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mentor-home',
  templateUrl: './mentor-home.component.html',
  styleUrls: ['./mentor-home.component.css']
})
export class MentorHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  userName = JSON.parse(localStorage.getItem('loggedUser'))['name'];
}
