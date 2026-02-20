import { Button } from "@/components/Button";
import { Badge } from "@/components/Badge";
import styles from "../list.module.css";
import Link from "next/link";

export default function Orders() {
    return (
        <>
            <div className={styles.header}>
                <h1 className={styles.title}>Pedidos</h1>
                <div className={styles.actions}>
                    <Button variant="secondary">Pesquisar</Button>
                </div>
            </div>

            <div className={styles.content}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Data</th>
                            <th>Cliente</th>
                            <th>Total</th>
                            <th>Status</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>#1001</td>
                            <td>19/02/2026</td>
                            <td>João Silva</td>
                            <td>R$ 299,90</td>
                            <td><Badge status="success">Entregue</Badge></td>
                            <td>
                                <div className={styles.actionsCell}>
                                    <Link href="/admin/orders/1001" className={styles.actionLink}>Ver Detalhe</Link>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>#1002</td>
                            <td>19/02/2026</td>
                            <td>Maria Mendes</td>
                            <td>R$ 49,90</td>
                            <td><Badge status="info">Despachado</Badge></td>
                            <td>
                                <div className={styles.actionsCell}>
                                    <Link href="/admin/orders/1002" className={styles.actionLink}>Ver Detalhe</Link>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>#1003</td>
                            <td>18/02/2026</td>
                            <td>Carlos T.</td>
                            <td>R$ 150,00</td>
                            <td><Badge status="neutral">Novo</Badge></td>
                            <td>
                                <div className={styles.actionsCell}>
                                    <Link href="/admin/orders/1003" className={styles.actionLink}>Ver Detalhe</Link>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
