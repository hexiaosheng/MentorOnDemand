import { __decorate } from "tslib";
import { Component } from '@angular/core';
let AdminTechnologiesComponent = class AdminTechnologiesComponent {
    constructor(adminService) {
        this.adminService = adminService;
    }
    ngOnInit() {
        this.items = this.adminService.getTechnologies();
    }
    onAddTech() {
    }
    onRemoveTech(id) {
        window.alert(id);
    }
};
AdminTechnologiesComponent = __decorate([
    Component({
        selector: 'app-admin-technologies',
        templateUrl: './admin-technologies.component.html',
        styleUrls: ['./admin-technologies.component.css']
    })
], AdminTechnologiesComponent);
export { AdminTechnologiesComponent };
//# sourceMappingURL=admin-technologies.component.js.map