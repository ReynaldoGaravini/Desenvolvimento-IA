import React from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

export function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    DevAI
                </Link>

                <div className={styles.search}>
                    <input type="text" placeholder="Buscar produtos..." />
                </div>

                <div className={styles.actions}>
                    <Link href="/cart" className={styles.link}>
                        Carrinho
                    </Link>
                    <Link href="/login" className={styles.link}>
                        Entrar
                    </Link>
                    <Link href="/admin" className={styles.link}>
                        Dashboard
                    </Link>
                </div>
            </div>
        </header>
    );
}
