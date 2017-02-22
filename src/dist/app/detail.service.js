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
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/observable/of');
require('rxjs/add/observable/throw');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
var http_1 = require('@angular/http');
var DetailService = (function () {
    function DetailService(http) {
        this.http = http;
        this.detail = [{
                date: 'hello',
                title: 'this',
                description: 'desc',
                priority: "3",
                id: ""
            }];
    }
    DetailService.prototype.addTask = function (detail) {
        var _this = this;
        // return Observable.of<any>(this.detail)
        // return Promise.reject<any>(new Error('my error'));
        //return Observable.throw(new Error("my error"))
        var jsonHeader = new http_1.Headers({
            'Content-type': 'application/json'
        });
        var obj = {
            date: detail.date,
            title: detail.title,
            description: detail.description,
            priority: detail.priority,
            id: ""
        };
        return this.http.post("http://localhost:9000/add", obj, { headers: jsonHeader }).map(function (response) {
            return _this.extractData(response);
        }).catch(function (e) { return _this.handleError(e); });
    };
    DetailService.prototype.extractData = function (res) {
        var body = res.json();
        return body;
    };
    DetailService.prototype.handleError = function (error) {
        var errMsg;
        try {
            if (JSON.parse(error._body).message) {
                errMsg = JSON.parse(error._body).message;
            }
            else {
                errMsg = "something went wrong Please try again";
            }
        }
        catch (e) {
            errMsg = "something went wrong Please try again";
        }
        return Observable_1.Observable.throw(new Error(errMsg));
    };
    DetailService.prototype.getData = function () {
        var _this = this;
        var jsonHeader = new http_1.Headers({
            'Content-type': 'application/json'
        });
        return this.http.get("http://localhost:9000/get/all", { headers: jsonHeader }).map(function (response) {
            return _this.extractData(response);
        }).catch(function (e) { return _this.handleError(e); });
    };
    DetailService.prototype.deleteData = function (id) {
        var _this = this;
        var jsonHeader = new http_1.Headers({
            'Content-type': 'application/json'
        });
        console.log("before delete" + id);
        return this.http.get("http://localhost:9000/remove/" + id, { headers: jsonHeader }).map(function (response) {
            return _this.extractData(response);
        }).catch(function (e) { return _this.handleError(e); });
    };
    DetailService.prototype.editData = function (id, detail) {
        var _this = this;
        var jsonHeader = new http_1.Headers({
            'Content-type': 'application/json'
        });
        var obj = {
            _id: id,
            date: detail.date,
            title: detail.title,
            description: detail.description,
            priority: detail.priority
        };
        console.log("before edit id :" + id);
        console.log("obj data : " + obj);
        return this.http.post("http://localhost:9000/update", obj, { headers: jsonHeader }).map(function (response) {
            return _this.extractData(response);
        }).catch(function (e) { return _this.handleError(e); });
    };
    DetailService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], DetailService);
    return DetailService;
}());
exports.DetailService = DetailService;
//# sourceMappingURL=detail.service.js.map