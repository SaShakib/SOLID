var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var EmailService = /** @class */ (function () {
    function EmailService() {
    }
    return EmailService;
}());
var smtpService = /** @class */ (function (_super) {
    __extends(smtpService, _super);
    function smtpService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    smtpService.prototype.send = function (message) {
        console.log("sending via smtp: " + message);
    };
    return smtpService;
}(EmailService));
var mockService = /** @class */ (function (_super) {
    __extends(mockService, _super);
    function mockService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    mockService.prototype.send = function (message) {
        console.log("sending via mock service: " + message);
    };
    return mockService;
}(EmailService));
var EmailSender = /** @class */ (function () {
    function EmailSender(service) {
        this.emailService = service;
    }
    EmailSender.prototype.sendEmail = function (message) {
        this.emailService.send(message);
    };
    return EmailSender;
}());
var smtp = new smtpService();
var emailSender = new EmailSender(smtp);
emailSender.sendEmail("something");
