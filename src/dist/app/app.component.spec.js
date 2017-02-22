"use strict";
var app_component_1 = require('./app.component');
var testing_1 = require('@angular/core/testing');
var platform_browser_1 = require('@angular/platform-browser');
var router_1 = require('@angular/router');
var testing_2 = require('@angular/router/testing');
describe('AppComponent', function () {
    var de;
    var comp;
    var fixture;
    var MockRouter = (function () {
        function MockRouter() {
        }
        return MockRouter;
    }());
    var MockActivatedRoute = (function () {
        function MockActivatedRoute() {
        }
        return MockActivatedRoute;
    }());
    var MockLocationStrategy = (function () {
        function MockLocationStrategy() {
        }
        return MockLocationStrategy;
    }());
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [app_component_1.AppComponent],
            providers: [router_1.RouterOutletMap],
            imports: [testing_2.RouterTestingModule]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(app_component_1.AppComponent);
        comp = fixture.componentInstance;
        de = fixture.debugElement.query(platform_browser_1.By.css('h1'));
    });
    it('should create component', function () { return expect(comp).toBeDefined(); });
});
//# sourceMappingURL=app.component.spec.js.map