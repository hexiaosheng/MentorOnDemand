import { __decorate } from "tslib";
import { Component } from '@angular/core';
let AdminUsersComponent = class AdminUsersComponent {
    constructor(adminService) {
        this.adminService = adminService;
    }
    ngOnInit() {
        this.items = this.adminService.getUsers();
    }
    onBlock(id) {
        window.alert(id);
    }
    onUnBlock(id) {
        window.alert(id);
    }
};
AdminUsersComponent = __decorate([
    Component({
        selector: 'app-admin-users',
        templateUrl: './admin-users.component.html',
        styleUrls: ['./admin-users.component.css']
    })
], AdminUsersComponent);
export { AdminUsersComponent };
//# sourceMappingURL=admin-users.component.js.map