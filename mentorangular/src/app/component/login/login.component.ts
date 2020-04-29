import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'
import { FormBuilder } from '@angular/forms';
import { User } from 'src/app/model/user';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) {
    this.loginForm = this.formBuilder.group({
      name: '',
      password: ''
    });
  }

  ngOnInit(): void {
  }

  headers = new HttpHeaders({ 'Content-Type': 'application/json' })
  onSubmit(userData) {
    this.http.post<any>('api/user/login',
      userData,
      { headers: this.headers, reportProgress: true })
      .subscribe((res: any) => {
        if (res.status == 'success') {
          localStorage.setItem('loggedUser', JSON.stringify(res.data))
          if (res.data.role == "admin") {
            this.router.navigateByUrl("admin-home")
          } else if (res.data.role == "mentor") {
            this.router.navigateByUrl("mentor-home")
          } else {
            this.router.navigateByUrl("user-home")
          }
        } else {
          alert('username or password is wrong')
        }
      });
  }
}
