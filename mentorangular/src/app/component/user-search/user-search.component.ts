import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Mentor } from 'src/app/model/mentor';
import { FormBuilder } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Training } from 'src/app/model/training';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent implements OnInit {
  items;
  searchForm;
  mentors: Array<Mentor> = [];

  headers = new HttpHeaders({ 'Content-Type': 'application/json' })

  constructor(private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,
    private http: HttpClient) {
    this.searchForm = this.formBuilder.group({
      keyword: ''
    });
  }

  ngOnInit(): void {
  }

  onSubmit(searchData) {
    this.mentors = [];
    this.http.get('api/user/search/?keyword=' + searchData.keyword,
      { headers: this.headers, reportProgress: true })
      .subscribe((data: any) => {
        console.log(data);
        data.forEach(element => {
          let mentor = new Mentor();
          mentor.name = element["mentorName"];
          mentor.id = element["mentorId"];
          mentor.skillName = element["name"];
          mentor.technology = element["techName"];
          mentor.experience = element["years"];
          mentor.totalDelivered = element["totalDelivered"];
          mentor.techId = element["techId"];
          this.mentors.push(mentor);
        });
        this.items = this.mentors;
      });
  }

  onProposal(mentor: Mentor) {
    let training = new Training();
    training.mentorId = mentor.id;
    training.userId = JSON.parse(localStorage.getItem('loggedUser'))['id'];
    training.name = mentor.skillName;
    training.state = "Proposed";
    training.ratings = 0;

    this.http.post<any>('api/training/proposal',
      training,
      { headers: this.headers, reportProgress: true })
      .subscribe((res: any) => {
        //alert(res);
        if (res == true) {
          window.alert("Your proposal has been sent to mentor for confirmation!")
        } else {
          alert('Sorry,the proposal is fail!')
        }
      });

  }
}
