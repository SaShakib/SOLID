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
var Bird = /** @class */ (function () {
    function Bird() {
    }
    Bird.prototype.move = function () {
        return "Moving";
    };
    return Bird;
}());
var Sparrow = /** @class */ (function (_super) {
    __extends(Sparrow, _super);
    function Sparrow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Sparrow.prototype.move = function () {
        return "Flying";
    };
    return Sparrow;
}(Bird));
var Penguin = /** @class */ (function (_super) {
    __extends(Penguin, _super);
    function Penguin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Penguin.prototype.move = function () {
        return "swimming";
    };
    return Penguin;
}(Bird));
var allBirds = [];
var BirdManager = /** @class */ (function () {
    function BirdManager() {
    }
    BirdManager.prototype.add = function (bird) {
        allBirds.push(bird);
    };
    BirdManager.prototype.move = function () {
        allBirds.forEach(function (bird) { return console.log(bird.move()); });
    };
    return BirdManager;
}());
// const birds = [new Bird(), new Penguin(), new Sparrow()];
// birds.forEach((bird) => {
//     console.log(bird.move());
// })
var birdManager = new BirdManager();
birdManager.add(new Sparrow());
birdManager.add(new Penguin());
birdManager.move();
