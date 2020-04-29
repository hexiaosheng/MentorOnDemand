import { __decorate } from "tslib";
import { Component } from '@angular/core';
let MentorCurtrainingsComponent = class MentorCurtrainingsComponent {
    constructor(route, mentorService) {
        this.route = route;
        this.mentorService = mentorService;
    }
    ngOnInit() {
        this.items = this.mentorService.getCurrentTrainings();
    }
};
MentorCurtrainingsComponent = __decorate([
    Component({
        selector: 'app-mentor-curtrainings',
        templateUrl: './mentor-curtrainings.component.html',
        styleUrls: ['./mentor-curtrainings.component.css']
    })
], MentorCurtrainingsComponent);
export { MentorCurtrainingsComponent };
//# sourceMappingURL=mentor-curtrainings.component.js.map