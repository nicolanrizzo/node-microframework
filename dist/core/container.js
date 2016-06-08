"use strict";
var Container = (function () {
    function Container() {
    }
    Container.registerModel = function (modelName, model) {
        this.models[modelName] = model;
    };
    Container.getModel = function (modelName) {
        return this.models[modelName];
    };
    Container.registerService = function (serviceName, service) {
        this.services[serviceName] = service;
    };
    Container.get = function (serviceName) {
        return this.services[serviceName];
    };
    Container.has = function (serviceName) {
        return Object.keys(this.services).indexOf(serviceName) != -1;
    };
    Container.setParameter = function (name, value) {
        this.parameters[name] = value;
    };
    Container.getParameter = function (name) {
        return this.parameters[name];
    };
    Container.getApplicationInstance = function () {
        return this.applicationContainer;
    };
    Container.setApplicationInstance = function (container) {
        this.applicationContainer = container;
    };
    Container.debugContainer = function () {
        console.log("Services\n\n" + Object.keys(this.services));
        console.log("Models\n\n" + Object.keys(this.models));
        console.log("Parameters\n\n" + Object.keys(this.parameters));
    };
    Container.models = {};
    Container.services = {};
    Container.parameters = {};
    return Container;
}());
exports.Container = Container;
//# sourceMappingURL=container.js.map