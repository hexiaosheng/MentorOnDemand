import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Training } from 'src/app/model/training';

@Component({
  selector: 'app-user-curtrainings',
  templateUrl: './user-curtrainings.component.html',
  styleUrls: ['./user-curtrainings.component.css']
})
export class UserCurtrainingsComponent implements OnInit {
  items;
  trainings: Array<Training> = [];

  headers = new HttpHeaders({ 'Content-Type': 'application/json' })

  constructor(private route: ActivatedRoute,
    private http: HttpClient) { }

  ngOnInit(): void {
    this.getCurrentTrainings();
  }

  getCurrentTrainings() {
    this.trainings = [];
    let userId = JSON.parse(localStorage.getItem('loggedUser'))['id']
    this.http.get('api/user/trainings?userId=' + userId + '&trainingStatus=progress',
      { headers: this.headers, reportProgress: true })
      .subscribe((data: any) => {
        console.log(data);
        data.forEach(element => {
          let training = new Training();
          training.name = element["name"];
          training.id = element["id"];
          training.mentorId = element["mentorId"];
          training.userId = element["userId"];
          training.ratings = element["ratings"];
          training.state = element["state"];
          this.trainings.push(training);
        });
        this.items = this.trainings;
      });
  }

  onPayment(training: Training) {

    this.http.post<any>('api/training/payment',
      training,
      { headers: this.headers, reportProgress: true })
      .subscribe((res: any) => {
        if (res == true) {
          window.alert("Your payment is completed!")
        } else {
          alert('Sorry,the payment is fail!')
        }
      });
  }

  onRating(training: Training) {
    training.ratings = 8.8;

    this.http.post<any>('api/training/rating',
      training,
      { headers: this.headers, reportProgress: true })
      .subscribe((res: any) => {
        if (res == true) {
          window.alert("Thanks for rating this training!")
        } else {
          alert('Sorry,the rating is fail!')
        }
      });
  }
}
