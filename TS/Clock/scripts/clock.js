var Clock = (function () {
    function Clock() {
        this.time = "00:00:00";
    }
    Clock.prototype.getTime = function () {
        var date = new Date();
        return [date.getHours(), date.getMinutes(), date.getSeconds()]
            .map(function (current) { return current >= 10 ? current : "0" + current; }).join(":");
    };
    Clock.prototype.start = function () {
        var that = this;
        this.clockHandler = setInterval(function () {
            that.target.innerHTML = that.getTime();
        }, 1000);
    };
    Clock.prototype.stop = function () {
        clearInterval(this.clockHandler);
    };
    Clock.prototype.bindTo = function (elem) {
        this.target = elem;
    };
    return Clock;
}());
