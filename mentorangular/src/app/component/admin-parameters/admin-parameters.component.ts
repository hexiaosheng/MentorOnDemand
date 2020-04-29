import { Component, OnInit } from '@angular/core';
import { Parameter } from 'src/app/model/parameter';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-admin-parameters',
  templateUrl: './admin-parameters.component.html',
  styleUrls: ['./admin-parameters.component.css']
})
export class AdminParametersComponent implements OnInit {
  paraForm;
  items;
  submitted = true;
  paras: Array<Parameter> = [];
  headers = new HttpHeaders({ 'Content-Type': 'application/json' })

  constructor(private http: HttpClient, private formBuilder: FormBuilder) {
    this.paraForm = this.formBuilder.group({
      commission: ''
    });
  }

  ngOnInit(): void {
    this.items = this.getParameters();
  }

  onSubmit(data) {
    let para = new Parameter();
    para.perCommissionPayment = data["commission"];
    para.id = 1;

    this.http.post<any>('api/parameter/update',
      para,
      { headers: this.headers, reportProgress: true })
      .subscribe((res: any) => {
        //alert(res);
        if (res == true) {
          window.alert("Save parameter successfully!");

          this.getParameters();
          this.submitted = true;
        } else {
          alert('Sorry,save parameter fail!')
        }
      });

    this.submitted = true;
  }

  getParameters() {
    this.paras = [];
    this.http.get('api/parameters',
      { headers: this.headers, reportProgress: true })
      .subscribe((data: any) => {
        console.log(data);
        data.forEach(element => {
          let para = new Parameter();
          para.id = element["id"];
          para.perCommissionPayment = element["perCommissionPayment"];

          this.paras.push(para);
        });
        this.items = this.paras;
      });
  }


  onUpdate() {
    this.submitted = false;
  }
}
