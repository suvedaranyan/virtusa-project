"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var api_service_1 = require("./Service/api.service");
var router_1 = require("@angular/router");
var AppComponent = /** @class */ (function () {
    function AppComponent(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AppComponent.prototype.ngOnInit = function () {
        if (this.auth.isAuthenticated != null) {
            if (this.auth.isAuthenticated && this.auth.getAuthType() == "customer") {
                this.router.navigate(["/home"]);
            }
            else if (this.auth.isAuthenticated && this.auth.getAuthType() == "admin") {
                this.router.navigate(["/admin"]);
            }
        }
        else if (this.auth.isAuthenticated == null) {
            this.router.navigate(["/login"]);
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        }),
        __metadata("design:paramtypes", [api_service_1.ApiService, router_1.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map