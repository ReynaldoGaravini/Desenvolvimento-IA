import React from 'react';
import Link from 'next/link';
import styles from './Sidebar.module.css';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <h3 className={styles.title}>Menu</h3>
            <nav className={styles.nav}>
                <Link href="/admin" className={styles.link}>Dashboard</Link>
                <Link href="/admin/categories" className={styles.link}>Categorias</Link>
                <Link href="/admin/products" className={styles.link}>Produtos</Link>
                <Link href="/admin/customers" className={styles.link}>Clientes</Link>
                <Link href="/admin/orders" className={styles.link}>Pedidos</Link>
            </nav>
        </aside>
    );
}
