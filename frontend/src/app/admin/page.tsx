import { Badge } from "@/components/Badge";
import styles from "./page.module.css";
import Link from "next/link";

export default function Dashboard() {
    return (
        <div className={styles.main}>
            <h1 className={styles.title}>Dashboard</h1>

            <div className={styles.grid}>
                <div className={styles.card}>
                    <span className={styles.cardTitle}>Total de Vendas</span>
                    <span className={styles.cardValue}>124</span>
                </div>
                <div className={styles.card}>
                    <span className={styles.cardTitle}>Valor Recebido</span>
                    <span className={styles.cardValue}>R$ 15.430,00</span>
                </div>
                <div className={styles.card}>
                    <span className={styles.cardTitle}>Valor Pendente</span>
                    <span className={styles.cardValue}>R$ 3.200,00</span>
                </div>
            </div>

            <div className={styles.tableSection}>
                <h2 className={styles.tableTitle}>Últimos Pedidos</h2>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Data</th>
                            <th>Cliente</th>
                            <th>Total</th>
                            <th>Status</th>
                            <th>Ação</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>#1001</td>
                            <td>19/02/2026</td>
                            <td>João Silva</td>
                            <td>R$ 299,90</td>
                            <td><Badge status="success">Entregue</Badge></td>
                            <td><Link href="/admin/orders/1001" style={{ color: 'var(--brand-primary)' }}>Ver</Link></td>
                        </tr>
                        <tr>
                            <td>#1002</td>
                            <td>19/02/2026</td>
                            <td>Maria Mendes</td>
                            <td>R$ 49,90</td>
                            <td><Badge status="info">Despachado</Badge></td>
                            <td><Link href="/admin/orders/1002" style={{ color: 'var(--brand-primary)' }}>Ver</Link></td>
                        </tr>
                        <tr>
                            <td>#1003</td>
                            <td>18/02/2026</td>
                            <td>Carlos T.</td>
                            <td>R$ 150,00</td>
                            <td><Badge status="neutral">Novo</Badge></td>
                            <td><Link href="/admin/orders/1003" style={{ color: 'var(--brand-primary)' }}>Ver</Link></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
