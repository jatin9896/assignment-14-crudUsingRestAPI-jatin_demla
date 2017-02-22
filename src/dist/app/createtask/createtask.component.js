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
var Createtaskcomponent = (function () {
    function Createtaskcomponent(service, route, router) {
        this.service = service;
        this.route = route;
        this.router = router;
        this.detailfield = new detail_1.Detail();
        // this.detail = this.service.detail
    }
    Createtaskcomponent.prototype.ngOnInit = function () {
        // this.route.params.subscribe((data: any) => {
        //  console.log("index is :"+this.index+"data : "+JSON.stringify(data)+"data id : "+data.id);
        //  this.index = +data.id;
        //  this.detailfield=this.service.detail[this.index];
        // alert("index is :"+this.index+"data : "+JSON.stringify(data)+"data id : "+data.id);
        //  });
    };
    Createtaskcomponent.prototype.submit = function (date, title, desc, priority, event) {
        event.preventDefault();
        this.detailfield.date = date;
        this.detailfield.title = title;
        this.detailfield.description = desc;
        this.detailfield.priority = priority;
        this.service.addTask(this.detailfield).subscribe(function (data) {
        }, function (err) {
            alert(err);
        }, function () {
            alert("Insert completed");
        });
        this.router.navigate(['showtask']);
    };
    Createtaskcomponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'createtask',
            templateUrl: './createtask.component.html',
            styleUrls: ['']
        }), 
        __metadata('design:paramtypes', [detail_service_1.DetailService, router_1.ActivatedRoute, router_1.Router])
    ], Createtaskcomponent);
    return Createtaskcomponent;
}());
exports.Createtaskcomponent = Createtaskcomponent;
//# sourceMappingURL=createtask.component.js.map