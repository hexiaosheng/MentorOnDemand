import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Payment } from 'src/app/model/Payment';

@Component({
  selector: 'app-admin-payments',
  templateUrl: './admin-payments.component.html',
  styleUrls: ['./admin-payments.component.css']
})
export class AdminPaymentsComponent implements OnInit {
  items;
  payments: Array<Payment> = [];
  headers = new HttpHeaders({ 'Content-Type': 'application/json' })

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.items = this.getPayments();
  }

  getPayments() {
    this.payments = [];
    this.http.get('api/payments',
      { headers: this.headers, reportProgress: true })
      .subscribe((data: any) => {
        console.log(data);
        data.forEach(element => {
          let payment = new Payment();
          payment.userName = element["userName"];
          payment.trainingName = element["trainingName"];
          payment.mentorName = element["mentorName"];
          payment.amount = element["amount"];
          payment.id = element["id"];

          this.payments.push(payment);
        });
        this.items = this.payments;
      });
  }
}
