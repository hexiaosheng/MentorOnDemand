import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let MentorService = class MentorService {
    constructor() { }
    getCurrentTrainings() {
        this.trainings = [
            { id: "001", name: "java", mentor: "jason", state: "Proposed", ratings: "8.8" },
            { id: "002", name: "srping mvc", mentor: "jason", state: "Proposed", ratings: "8.8" }
        ];
        return this.trainings;
    }
    getCompletedTrainings() {
        this.trainings = [
            { id: "003", name: "java", mentor: "jason", state: "Completed", ratings: "8.8" },
            { id: "004", name: "srping mvc", mentor: "jason", state: "Completed", ratings: "8.8" }
        ];
        return this.trainings;
    }
    getNotifications() {
        this.notifications = [
            { id: "01", title: "propsoal has been confirmed", content: "your java training has been confirmed by mentor" },
            { id: "02", title: "payment is completed", content: "your java training payment is completed" }
        ];
        return this.notifications;
    }
    getMentorSkills() {
        this.mentorSkills = [
            { id: 1, name: "java", techId: 1, techName: "IT" },
            { id: 2, name: "mvc", techId: 1, techName: "IT" }
        ];
        return this.mentorSkills;
    }
    editSkills() {
    }
};
MentorService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], MentorService);
export { MentorService };
//# sourceMappingURL=mentor.service.js.map