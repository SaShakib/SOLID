var Paypal = /** @class */ (function () {
    function Paypal() {
    }
    Paypal.prototype.processPayment = function (amount) {
        console.log("Payment is processed by Paypal ".concat(amount));
    };
    return Paypal;
}());
var Cash = /** @class */ (function () {
    function Cash() {
    }
    Cash.prototype.processPayment = function (amount) {
        console.log("Payment is processed by Cash ".concat(amount));
    };
    return Cash;
}());
var PaymentManager = /** @class */ (function () {
    function PaymentManager() {
        this.registry = new Map();
    }
    PaymentManager.prototype.register = function (name, payment) {
        this.registry.set(name, payment);
        console.log("\u2705 Registered payment method: ".concat(name));
    };
    PaymentManager.prototype.unregister = function (name) {
        if (this.registry.get(name)) {
            this.registry.delete(name);
            console.log("\u274C Unregistered payment method: ".concat(name));
        }
        else {
            console.log("\u26A0\uFE0F Payment method '".concat(name, "' not found."));
        }
    };
    PaymentManager.prototype.processAll = function (amount) {
        this.registry.forEach(function (payment, key) {
            payment.processPayment(amount);
        });
    };
    return PaymentManager;
}());
var cash = new Cash();
var paypalPayment = new Paypal();
var paymentProcessor = new PaymentManager();
paymentProcessor.register("Cash", cash);
paymentProcessor.register("paypal", paypalPayment);
paymentProcessor.processAll(200);
