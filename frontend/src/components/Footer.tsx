import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

export function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.text}>
                    &copy; {new Date().getFullYear()} DevAI. Todos os direitos reservados.
                </div>
                <div className={styles.links}>
                    <Link href="/sobre" className={styles.link}>Sobre</Link>
                    <Link href="/termos" className={styles.link}>Termos de Uso</Link>
                    <Link href="/contato" className={styles.link}>Contato</Link>
                </div>
            </div>
        </footer>
    );
}
