"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_controller_1 = require("../controllers/auth.controller");
const validateToken_1 = require("../libs/validateToken");
const router = (0, express_1.Router)();
router.post('/singup', auth_controller_1.singup);
router.post('/singin', auth_controller_1.singin);
router.get('/profile', validateToken_1.TokenValidation, auth_controller_1.profile); // con TokenValidation solo entra a la pagina si solo tiene token
exports.default = router;
//# sourceMappingURL=auth.js.map