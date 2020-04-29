import { __decorate } from "tslib";
import { Component } from '@angular/core';
let AdminPaymentsComponent = class AdminPaymentsComponent {
    constructor(adminService) {
        this.adminService = adminService;
    }
    ngOnInit() {
        this.items = this.adminService.getPayments();
    }
};
AdminPaymentsComponent = __decorate([
    Component({
        selector: 'app-admin-payments',
        templateUrl: './admin-payments.component.html',
        styleUrls: ['./admin-payments.component.css']
    })
], AdminPaymentsComponent);
export { AdminPaymentsComponent };
//# sourceMappingURL=admin-payments.component.js.map