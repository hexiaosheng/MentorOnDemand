import { __decorate } from "tslib";
import { Component } from '@angular/core';
let AdminParametersComponent = class AdminParametersComponent {
    constructor(adminService) {
        this.adminService = adminService;
    }
    ngOnInit() {
        this.perCommissionPayment = 5;
        this.model = this.adminService.getParameters();
    }
    onSave() {
    }
};
AdminParametersComponent = __decorate([
    Component({
        selector: 'app-admin-parameters',
        templateUrl: './admin-parameters.component.html',
        styleUrls: ['./admin-parameters.component.css']
    })
], AdminParametersComponent);
export { AdminParametersComponent };
//# sourceMappingURL=admin-parameters.component.js.map