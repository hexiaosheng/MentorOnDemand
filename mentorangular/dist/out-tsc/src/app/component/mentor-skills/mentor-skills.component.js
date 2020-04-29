import { __decorate } from "tslib";
import { Component } from '@angular/core';
let MentorSkillsComponent = class MentorSkillsComponent {
    constructor(mentorService) {
        this.mentorService = mentorService;
    }
    ngOnInit() {
        this.items = this.mentorService.getMentorSkills();
    }
    onAddSkill() {
    }
};
MentorSkillsComponent = __decorate([
    Component({
        selector: 'app-mentor-skills',
        templateUrl: './mentor-skills.component.html',
        styleUrls: ['./mentor-skills.component.css']
    })
], MentorSkillsComponent);
export { MentorSkillsComponent };
//# sourceMappingURL=mentor-skills.component.js.map