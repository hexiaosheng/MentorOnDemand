import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
let UserService = class UserService {
    constructor(http) {
        this.http = http;
        this.headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    }
    search(keyword) {
        this.mentors = [
            { name: "jason", technology: "java", experience: 1, totalDelivered: 1, feeCharged: 1.00 },
            { name: "john", technology: "spring boot", experience: 2, totalDelivered: 2, feeCharged: 1.00 }
        ];
        return this.mentors;
    }
    getCurrentTrainings() {
        this.trainings = [
            { id: "001", name: "java", mentor: "jason", state: "Proposed", ratings: "8.8" },
            { id: "002", name: "srping mvc", mentor: "jason", state: "Proposed", ratings: "8.8" }
        ];
        return this.trainings;
    }
    getCompletedTrainings() {
        this.trainings = [
            { id: "003", name: "java", mentor: "jason", state: "Completed", ratings: "8.8" },
            { id: "004", name: "srping mvc", mentor: "jason", state: "Completed", ratings: "8.8" }
        ];
        return this.trainings;
    }
    sendProsoal() {
    }
    makePayment() {
    }
    rateMentor() {
    }
    getNotifications() {
        this.notifications = [
            { id: "01", title: "propsoal has been confirmed", content: "your java training has been confirmed by mentor" },
            { id: "02", title: "payment is completed", content: "your java training payment is completed" }
        ];
        return this.notifications;
    }
    login(userData) {
        this.http.post('/api/user/login', userData, { headers: this.headers, reportProgress: true })
            .subscribe((data) => {
            console.log(data);
            // if (data.status == 'success') {
            //   localStorage.setItem('userinfo', JSON.stringify(data.data))
            //   setTimeout(() => {
            //     window.location.assign('/')
            //   }, 1000);
            // } else {
            //   alert('username or password is wrong')
            // }
            return data;
        });
    }
};
UserService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], UserService);
export { UserService };
//# sourceMappingURL=user.service.js.map