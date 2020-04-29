import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Technology } from 'src/app/model/Technology';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-admin-technologies',
  templateUrl: './admin-technologies.component.html',
  styleUrls: ['./admin-technologies.component.css']
})
export class AdminTechnologiesComponent implements OnInit {
  items;
  techForm;
  submitted = true;
  technologies: Array<Technology> = [];
  headers = new HttpHeaders({ 'Content-Type': 'application/json' })

  constructor(private http: HttpClient, private formBuilder: FormBuilder) {
    this.techForm = this.formBuilder.group({
      name: ''
    });
  }

  ngOnInit(): void {
    this.items = this.getTechnologies();
  }
  onAddTech() {
    this.submitted = false;
  }

  onRemoveTech(data) {
    //window.alert(id);
    this.http.delete<any>('api/technology/remove?techId=' + data["id"],
      { headers: this.headers, reportProgress: true })
      .subscribe((res: any) => {
        //alert(res);
        if (res == true) {
          window.alert("Remove technology successfully!");

          this.getTechnologies();
          this.submitted = true;
        } else {
          alert('Sorry,remove technology fail!')
        }
      });
  }

  getTechnologies() {
    this.technologies = [];
    this.http.get('api/technologies',
      { headers: this.headers, reportProgress: true })
      .subscribe((data: any) => {
        console.log(data);
        data.forEach(element => {
          let technology = new Technology();
          technology.name = element["name"];
          technology.id = element["id"];

          this.technologies.push(technology);
        });
        this.items = this.technologies;
      });
  }

  onSubmit(data) {
    //console.log(data);
    let tech = new Technology();
    tech.name = data["name"];

    this.http.post<any>('api/technology/add',
      tech,
      { headers: this.headers, reportProgress: true })
      .subscribe((res: any) => {
        //alert(res);
        if (res == true) {
          window.alert("Add technology successfully!");

          this.getTechnologies();
          this.submitted = true;
        } else {
          alert('Sorry,add technology fail!')
        }
      });

    this.submitted = true;
  }
}
