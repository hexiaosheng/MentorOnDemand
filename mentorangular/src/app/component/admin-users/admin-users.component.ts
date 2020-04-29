import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {
  items
  users: Array<User> = [];
  headers = new HttpHeaders({ 'Content-Type': 'application/json' })

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.items = this.getUsers();
  }

  onBlock(user) {
    //window.alert(id);
    this.http.post<any>('api/user/block?userId=' + user.id,
      { headers: this.headers, reportProgress: true })
      .subscribe((res: any) => {
        //alert(res);
        if (res == true) {
          window.alert("This user has been blocked!");

          this.getUsers();
        } else {
          alert('Sorry,block user fail!')
        }
      });
  }

  onUnBlock(user: User) {
    //window.alert(id);
    this.http.post<any>('api/user/unblock?userId=' + user.id,
      { headers: this.headers, reportProgress: true })
      .subscribe((res: any) => {
        //alert(res);
        if (res == true) {
          window.alert("This user has been unblocked!");

          this.getUsers();
        } else {
          alert('Sorry,unblock user fail!')
        }
      });
  }

  getUsers() {
    this.users = [];
    this.http.get('api/users',
      { headers: this.headers, reportProgress: true })
      .subscribe((data: any) => {
        console.log(data);
        data.forEach(element => {
          let user = new User();
          user.name = element["name"];
          user.id = element["id"];
          user.role = element["role"];
          user.status = element["status"];
          this.users.push(user);
        });
        this.items = this.users;
      });
  }

}
