import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Training } from 'src/app/model/training';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-mentor-comptrainings',
  templateUrl: './mentor-comptrainings.component.html',
  styleUrls: ['./mentor-comptrainings.component.css']
})
export class MentorComptrainingsComponent implements OnInit {
  items;
  trainings: Array<Training> = [];

  headers = new HttpHeaders({ 'Content-Type': 'application/json' })

  constructor(private route: ActivatedRoute,
    private http: HttpClient) { }

  ngOnInit(): void {
    this.getCompletedTrainings();
  }

  getCompletedTrainings() {
    this.trainings = [];
    let userId = JSON.parse(localStorage.getItem('loggedUser'))['id']
    this.http.get('api/mentor/trainings?userId=' + userId + '&trainingStatus=completed',
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
}
