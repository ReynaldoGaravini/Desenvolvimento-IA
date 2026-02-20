import React from 'react';
import styles from './Badge.module.css';

interface BadgeProps {
    status: 'neutral' | 'success' | 'info' | 'error';
    children: React.ReactNode;
}

export function Badge({ status, children }: BadgeProps) {
    return (
        <span className={`${styles.badge} ${styles[status]}`}>
            {children}
        </span>
    );
}
