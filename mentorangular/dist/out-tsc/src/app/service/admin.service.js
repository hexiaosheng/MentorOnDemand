import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let AdminService = class AdminService {
    constructor() { }
    getUsers() {
        this.users = [
            { id: 1, name: "jason", password: "", role: "user" },
            { id: 2, name: "jason", password: "", role: "mentor" }
        ];
        return this.users;
    }
    blockUser() {
    }
    unBlockUser() {
    }
    getTechnologies() {
        this.technologies = [
            { id: 1, name: "IT" },
            { id: 2, name: "IT" }
        ];
        return this.technologies;
    }
    getPayments() {
        this.payments = [
            { id: 1, userName: "jason", mentorName: "john", trainingName: "java", amount: 100.00 },
            { id: 2, userName: "jason", mentorName: "john", trainingName: "mvc", amount: 200.00 }
        ];
        return this.payments;
    }
    getParameters() {
        this.parameter.perCommissionPayment = 5;
        return this.parameter;
    }
    editParameters() {
    }
    AddTechlonogy() {
    }
    removeTechlonogy() {
    }
};
AdminService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], AdminService);
export { AdminService };
//# sourceMappingURL=admin.service.js.map