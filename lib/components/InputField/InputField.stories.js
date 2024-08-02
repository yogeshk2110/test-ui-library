"use strict";
// src/components/InputField/InputField.stories.tsx
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
var react_1 = __importDefault(require("react"));
var InputField_1 = __importDefault(require("./InputField"));
exports.default = {
    title: 'Components/InputField',
    component: InputField_1.default,
    argTypes: {
        label: { control: 'text' },
        value: { control: 'text' },
        placeholder: { control: 'text' },
        type: { control: 'text' },
    },
};
var Template = function (args) { return react_1.default.createElement(InputField_1.default, __assign({}, args)); };
exports.Default = Template.bind({});
exports.Default.args = {
    label: 'Name',
    value: '',
    onChange: function () { },
    placeholder: 'Enter your name',
    type: 'text',
};
