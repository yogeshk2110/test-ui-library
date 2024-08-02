"use strict";
// src/components/Button.stories.tsx
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
exports.Small = exports.Large = exports.Secondary = exports.Primary = void 0;
var react_1 = __importDefault(require("react"));
var Button_1 = __importDefault(require("./Button"));
exports.default = {
    title: 'Components/Button',
    component: Button_1.default,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    parameters: {
        docs: {
            description: {
                component: 'Button component used for user interaction',
            },
        },
    },
};
var Template = function (args) { return react_1.default.createElement(Button_1.default, __assign({}, args)); };
exports.Primary = Template.bind({});
exports.Primary.args = {
    primary: true,
    label: 'Button',
};
exports.Primary.parameters = {
    docs: {
        storyDescription: 'Primary button used for main actions',
    },
};
exports.Secondary = Template.bind({});
exports.Secondary.args = {
    primary: false,
    label: 'Button',
};
exports.Secondary.parameters = {
    docs: {
        storyDescription: 'Secondary button used for less prominent actions',
    },
};
exports.Large = Template.bind({});
exports.Large.args = {
    size: 'large',
    label: 'Button',
};
exports.Large.parameters = {
    docs: {
        storyDescription: 'Large button',
    },
};
exports.Small = Template.bind({});
exports.Small.args = {
    size: 'small',
    label: 'Button',
};
exports.Small.parameters = {
    docs: {
        storyDescription: 'Small button',
    },
};
