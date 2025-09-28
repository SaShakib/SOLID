var Fan = /** @class */ (function () {
    function Fan() {
    }
    Fan.prototype.turnon = function () {
        console.log("On");
    };
    Fan.prototype.turnoff = function () {
        console.log("Off");
    };
    return Fan;
}());
var fan = new Fan();
fan.turnon();
