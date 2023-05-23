"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_controller_1 = require("../controllers/auth.controller");
const router = (0, express_1.Router)();
router.post('/singup', auth_controller_1.singup);
router.post('/singin', auth_controller_1.singin);
router.get('/profile', auth_controller_1.profile);
exports.default = router;
//# sourceMappingURL=auth.js.map