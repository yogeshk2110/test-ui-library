"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
require("./Button.css");
var Button = function (_a) {
    var onClick = _a.onClick, _b = _a.primary, primary = _b === void 0 ? false : _b, label = _a.label, backgroundColor = _a.backgroundColor, _c = _a.size, size = _c === void 0 ? 'medium' : _c;
    var mode = primary ? 'button--primary' : 'button--secondary';
    var styles = {
        backgroundColor: backgroundColor,
    };
    return (react_1.default.createElement("button", { type: "button", className: "button ".concat(mode, " button--").concat(size), style: styles, onClick: onClick }, label));
};
exports.default = Button;
