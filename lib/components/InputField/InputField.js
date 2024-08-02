"use strict";
// src/components/InputField/InputField.tsx
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
require("./InputField.css");
var InputField = function (_a) {
    var label = _a.label, value = _a.value, onChange = _a.onChange, placeholder = _a.placeholder, _b = _a.type, type = _b === void 0 ? 'text' : _b;
    return (react_1.default.createElement("div", { className: "input-field" },
        react_1.default.createElement("label", null, label),
        react_1.default.createElement("input", { type: type, value: value, onChange: function (e) { return onChange(e.target.value); }, placeholder: placeholder })));
};
exports.default = InputField;
