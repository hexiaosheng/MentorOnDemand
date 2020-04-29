import { __decorate } from "tslib";
import { Component } from '@angular/core';
let UserSearchComponent = class UserSearchComponent {
    constructor(route, userService) {
        this.route = route;
        this.userService = userService;
    }
    ngOnInit() {
    }
    onSearch() {
        //window.alert(this.keyword);
        this.items = this.userService.search(this.keyword);
    }
};
UserSearchComponent = __decorate([
    Component({
        selector: 'app-user-search',
        templateUrl: './user-search.component.html',
        styleUrls: ['./user-search.component.css']
    })
], UserSearchComponent);
export { UserSearchComponent };
//# sourceMappingURL=user-search.component.js.map