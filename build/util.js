"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = void 0;
var dateStringToDate = function (dateString) {
    // 28/10/2018
    var dateParts = dateString
        .split('/')
        .map(function (item) {
        return parseInt(item);
    }); // [28, 10, 2018]
    return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};
exports.dateStringToDate = dateStringToDate;
