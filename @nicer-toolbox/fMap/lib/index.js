"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fmap = function (items, mapFunction, filterFunction) {
    var _a;
    return filterFunction
        ? (_a = items === null || items === void 0 ? void 0 : items.filter(filterFunction)) === null || _a === void 0 ? void 0 : _a.map(mapFunction)
        : items === null || items === void 0 ? void 0 : items.map(mapFunction);
};
exports.default = fmap;
