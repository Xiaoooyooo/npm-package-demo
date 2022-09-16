"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.day = exports.date = exports.month = exports.year = void 0;
function now() {
    return new Date();
}
function year(time = now()) {
    return time.getFullYear();
}
exports.year = year;
function month(time = now()) {
    return time.getMonth();
}
exports.month = month;
function date(time = now()) {
    return time.getDate();
}
exports.date = date;
function day(time = now()) {
    return time.getDay();
}
exports.day = day;
exports.default = {
    year,
    month,
    date,
    day,
};
