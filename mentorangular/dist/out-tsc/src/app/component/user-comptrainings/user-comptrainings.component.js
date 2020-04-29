import { __decorate } from "tslib";
import { Component } from '@angular/core';
let UserComptrainingsComponent = class UserComptrainingsComponent {
    constructor(route, userService) {
        this.route = route;
        this.userService = userService;
        this.userName = "******";
    }
    ngOnInit() {
        this.items = this.userService.getCompletedTrainings();
    }
};
UserComptrainingsComponent = __decorate([
    Component({
        selector: 'app-user-comptrainings',
        templateUrl: './user-comptrainings.component.html',
        styleUrls: ['./user-comptrainings.component.css']
    })
], UserComptrainingsComponent);
export { UserComptrainingsComponent };
//# sourceMappingURL=user-comptrainings.component.js.map