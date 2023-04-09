"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const envParser_1 = require("./envParser");
(0, dotenv_1.config)();
exports.default = (key, ...args) => (0, envParser_1.default)(process.env[key], ...args);
//# sourceMappingURL=env.js.map