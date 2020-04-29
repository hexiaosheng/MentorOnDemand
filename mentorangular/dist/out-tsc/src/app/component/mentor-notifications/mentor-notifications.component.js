import { __decorate } from "tslib";
import { Component } from '@angular/core';
let MentorNotificationsComponent = class MentorNotificationsComponent {
    constructor(route, mentorService) {
        this.route = route;
        this.mentorService = mentorService;
    }
    ngOnInit() {
        this.items = this.mentorService.getNotifications();
    }
};
MentorNotificationsComponent = __decorate([
    Component({
        selector: 'app-mentor-notifications',
        templateUrl: './mentor-notifications.component.html',
        styleUrls: ['./mentor-notifications.component.css']
    })
], MentorNotificationsComponent);
export { MentorNotificationsComponent };
//# sourceMappingURL=mentor-notifications.component.js.map