"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function env(value, defaultValue = null) {
    if (value === undefined) {
        return defaultValue;
    }
    if (value.toLowerCase() === 'true') {
        return true;
    }
    if (value.toLowerCase() === 'false') {
        return false;
    }
    if (value.toLowerCase() === 'null') {
        return null;
    }
    if (!isNaN(Number(value))) {
        return Number(value);
    }
    return value;
}
exports.default = env;
//# sourceMappingURL=env2.js.map