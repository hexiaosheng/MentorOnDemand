import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Mentor } from 'src/app/model/mentor';
import { FormBuilder } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Training } from 'src/app/model/training';
import { Skill } from 'src/app/model/skill';

@Component({
  selector: 'app-mentor-skills',
  templateUrl: './mentor-skills.component.html',
  styleUrls: ['./mentor-skills.component.css']
})
export class MentorSkillsComponent implements OnInit {
  msForm;
  items;
  submitted = true;
  mentors: Array<Mentor> = [];
  headers = new HttpHeaders({ 'Content-Type': 'application/json' })
  technologies = ['IT'];

  constructor(private http: HttpClient, private formBuilder: FormBuilder) {
    this.msForm = this.formBuilder.group({
      name: '',
      techName: '',
      years: '',
      totalDelivered: ''
    });
  }

  ngOnInit(): void {
    this.getMentorSkills();
  }

  getMentorSkills() {
    this.mentors = [];
    let userId = JSON.parse(localStorage.getItem('loggedUser'))['id'];
    this.http.get('api/mentor/skills/?userId=' + userId,
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

  onAddSkill() {
    this.submitted = false;
  }

  onSubmit(data) {
    //console.log(data);
    let skill = new Skill();
    skill.name = data["name"];
    skill.mentorId = JSON.parse(localStorage.getItem('loggedUser'))['id'];
    skill.techId = 1;
    skill.techName = data["techName"];
    skill.years = data["years"];
    skill.totalDelivered = data["totalDelivered"];

    this.http.post<any>('api/mentor/addskill',
      skill,
      { headers: this.headers, reportProgress: true })
      .subscribe((res: any) => {
        //alert(res);
        if (res == true) {
          window.alert("Add skill successfully!");

          this.getMentorSkills();
          this.submitted = true;
        } else {
          alert('Sorry,add skill fail!')
        }
      });

    this.submitted = true;
  }
}
