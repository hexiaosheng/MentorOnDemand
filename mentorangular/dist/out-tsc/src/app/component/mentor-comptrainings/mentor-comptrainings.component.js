import { __decorate } from "tslib";
import { Component } from '@angular/core';
let MentorComptrainingsComponent = class MentorComptrainingsComponent {
    constructor(route, mentorService) {
        this.route = route;
        this.mentorService = mentorService;
    }
    ngOnInit() {
        this.items = this.mentorService.getCompletedTrainings();
    }
};
MentorComptrainingsComponent = __decorate([
    Component({
        selector: 'app-mentor-comptrainings',
        templateUrl: './mentor-comptrainings.component.html',
        styleUrls: ['./mentor-comptrainings.component.css']
    })
], MentorComptrainingsComponent);
export { MentorComptrainingsComponent };
//# sourceMappingURL=mentor-comptrainings.component.js.map