import { __decorate } from "tslib";
import { Component } from '@angular/core';
let UserCurtrainingsComponent = class UserCurtrainingsComponent {
    constructor(route, userService) {
        this.route = route;
        this.userService = userService;
        this.userName = "******";
    }
    ngOnInit() {
        this.items = this.userService.getCurrentTrainings();
    }
};
UserCurtrainingsComponent = __decorate([
    Component({
        selector: 'app-user-curtrainings',
        templateUrl: './user-curtrainings.component.html',
        styleUrls: ['./user-curtrainings.component.css']
    })
], UserCurtrainingsComponent);
export { UserCurtrainingsComponent };
//# sourceMappingURL=user-curtrainings.component.js.map