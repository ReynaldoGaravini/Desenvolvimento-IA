import React, { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary';
    fullWidth?: boolean;
}

export function Button({ variant = 'primary', fullWidth, className, children, ...props }: ButtonProps) {
    return (
        <button
            className={`${styles.button} ${variant === 'secondary' ? styles.secondary : ''} ${className || ''}`}
            style={{ width: fullWidth ? '100%' : undefined }}
            {...props}
        >
            {children}
        </button>
    );
}
