import { __decorate } from "tslib";
import { Component } from '@angular/core';
let UserNotificationsComponent = class UserNotificationsComponent {
    constructor(route, userService) {
        this.route = route;
        this.userService = userService;
    }
    ngOnInit() {
        this.items = this.userService.getNotifications();
    }
};
UserNotificationsComponent = __decorate([
    Component({
        selector: 'app-user-notifications',
        templateUrl: './user-notifications.component.html',
        styleUrls: ['./user-notifications.component.css']
    })
], UserNotificationsComponent);
export { UserNotificationsComponent };
//# sourceMappingURL=user-notifications.component.js.map