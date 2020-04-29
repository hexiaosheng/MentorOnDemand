import { __decorate } from "tslib";
import { Component } from '@angular/core';
let LoginComponent = class LoginComponent {
    constructor(formBuilder, router, userService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.userService = userService;
        this.loginForm = this.formBuilder.group({
            name: '',
            password: ''
        });
    }
    ngOnInit() {
    }
    onSubmit(userData) {
        let data = this.userService.login(userData);
        if (userData.name == "admin") {
            this.router.navigateByUrl("admin-home");
        }
        else if (userData.name == "mentor") {
            this.router.navigateByUrl("mentor-home");
        }
        else {
            this.router.navigateByUrl("user-home");
        }
    }
};
LoginComponent = __decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.css']
    })
], LoginComponent);
export { LoginComponent };
//# sourceMappingURL=login.component.js.map