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
var core_1 = require('@angular/core');
var detail_1 = require('../detail');
var detail_service_1 = require('../detail.service');
var router_1 = require("@angular/router");
var Edittaskcomponent = (function () {
    function Edittaskcomponent(service, route, router) {
        this.service = service;
        this.route = route;
        this.router = router;
        this.temp = new detail_1.Detail();
        // this.detail = this.service.detail
    }
    Edittaskcomponent.prototype.ngOnInit = function () {
        var _this = this;
        this.detail = this.service.detail;
        this.route.params.subscribe(function (data) {
            _this.index = data.id;
            console.log("recieved data id : " + data.id + "index : " + _this.index);
            _this.detailfield = _this.detail.filter(function (x) { return _this.index == x._id; })[0];
            console.log("filed to be edited " + JSON.stringify(_this.detailfield));
        });
    };
    Edittaskcomponent.prototype.edit = function (date, title, desc, priority, event) {
        var _this = this;
        event.preventDefault();
        console.log("edit call");
        this.temp.id = this.index;
        this.temp.date = this.detailfield.date;
        this.temp.title = this.detailfield.title;
        this.temp.description = this.detailfield.description;
        this.temp.priority = this.detailfield.priority;
        console.log("before edit call data" + this.temp);
        this.service.editData(this.index, this.temp).subscribe(function (data) {
            console.log(JSON.stringify(data));
            alert("updated data");
            _this.router.navigate(['showtask']);
        }, function (err) {
            alert(err);
        });
    };
    Edittaskcomponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'edittask',
            templateUrl: './edittask.component.html',
            styleUrls: ['']
        }), 
        __metadata('design:paramtypes', [detail_service_1.DetailService, router_1.ActivatedRoute, router_1.Router])
    ], Edittaskcomponent);
    return Edittaskcomponent;
}());
exports.Edittaskcomponent = Edittaskcomponent;
//# sourceMappingURL=edittask.component.js.map