"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.profile = exports.singin = exports.singup = void 0;
const singup = (req, res) => {
    res.send('singup');
};
exports.singup = singup;
const singin = (req, res) => {
    res.send('singin');
};
exports.singin = singin;
const profile = (req, res) => {
    res.send('profile');
};
exports.profile = profile;
//# sourceMappingURL=auth.controller.js.map