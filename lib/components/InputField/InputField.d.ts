import React from 'react';
import './InputField.css';
export interface InputFieldProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    type?: string;
}
declare const InputField: React.FC<InputFieldProps>;
export default InputField;
