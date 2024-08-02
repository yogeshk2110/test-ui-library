
import React from 'react';
import './Button.css'

export interface ButtonProps {
  onClick?: () => void;
  primary?: boolean;
  label: string;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  primary = false,
  label,
  backgroundColor,
  size = 'medium',
}) => {
  const mode = primary ? 'button--primary' : 'button--secondary';
  const styles = {
    backgroundColor,
  };

  return (
    <button
      type="button"
      className={`button ${mode} button--${size}`}
      style={styles}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
