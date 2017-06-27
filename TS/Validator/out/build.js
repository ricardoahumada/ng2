System.registerDynamic("scripts/ZipCodeValidator.js", [], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var numberRegexp = /^[0-9]+$/;
    var ZipCodeValidator = function () {
        function ZipCodeValidator() {}
        ZipCodeValidator.prototype.isAcceptable = function (s) {
            return s.length === 5 && numberRegexp.test(s);
        };
        return ZipCodeValidator;
    }();
    exports.ZipCodeValidator = ZipCodeValidator;
    return module.exports;
});
System.registerDynamic("scripts/LettersOnlyValidator.js", [], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var lettersRegexp = /^[A-Za-z]+$/;
    var LettersOnlyValidator = function () {
        function LettersOnlyValidator() {}
        LettersOnlyValidator.prototype.isAcceptable = function (s) {
            return lettersRegexp.test(s);
        };
        return LettersOnlyValidator;
    }();
    exports.LettersOnlyValidator = LettersOnlyValidator;
    return module.exports;
});
System.registerDynamic("scripts/Test.js", ["scripts/ZipCodeValidator.js", "scripts/LettersOnlyValidator.js"], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var ZipCodeValidator_1 = $__require("scripts/ZipCodeValidator.js");
    var LettersOnlyValidator_1 = $__require("scripts/LettersOnlyValidator.js");
    console.log('Entra');
    // Some samples to try
    var strings = ["Hello", "98052", "101"];
    // Validators to use
    var validators = {};
    validators["ZIP code"] = new ZipCodeValidator_1.ZipCodeValidator();
    validators["Letters only"] = new LettersOnlyValidator_1.LettersOnlyValidator();
    // Show whether each string passed each validator
    strings.forEach(function (s) {
        for (var name_1 in validators) {
            console.log("\"" + s + "\" - " + (validators[name_1].isAcceptable(s) ? "matches" : "does not match") + " " + name_1);
        }
    });
    return module.exports;
});
//# sourceMappingURL=build.js.map