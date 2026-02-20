import React from 'react';
import styles from './Card.module.css';

interface ProductCardProps {
    title: string;
    price: number;
    imageUrl?: string;
    onAddToCart?: () => void;
    children?: React.ReactNode;
}

export function ProductCard({ title, price, imageUrl, onAddToCart, children }: ProductCardProps) {
    const formattedPrice = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(price);

    return (
        <div className={styles.card}>
            <div className={styles.imageWrapper}>
                <img
                    src={imageUrl || 'https://via.placeholder.com/400?text=Sem+Foto'}
                    alt={title}
                    className={styles.image}
                    loading="lazy"
                />
            </div>
            <div className={styles.content}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.price}>{formattedPrice}</p>
                {children && <div className={styles.actions}>{children}</div>}
            </div>
        </div>
    );
}
