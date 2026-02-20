import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Badge } from "@/components/Badge";
import Link from "next/link";
import styles from "./page.module.css";

export default function MyOrders() {
    return (
        <>
            <Header />
            <main className={`${styles.main} container`}>
                <h1 className={styles.title}>Meus Pedidos</h1>

                <div className={styles.list}>
                    <div className={styles.item}>
                        <div className={styles.itemInfo}>
                            <div className={styles.itemHeader}>
                                <span className={styles.orderNumber}>Pedido #1001</span>
                                <span className={styles.orderDate}>Realizado em 19/02/2026</span>
                                <Badge status="success">Entregue</Badge>
                            </div>
                            <span className={styles.orderTotal}>Total: R$ 314,70</span>
                        </div>
                        <Link href="/orders/1001" className={styles.viewDetail}>
                            Ver Detalhes
                        </Link>
                    </div>

                    <div className={styles.item}>
                        <div className={styles.itemInfo}>
                            <div className={styles.itemHeader}>
                                <span className={styles.orderNumber}>Pedido #1000</span>
                                <span className={styles.orderDate}>Realizado em 10/02/2026</span>
                                <Badge status="success">Entregue</Badge>
                            </div>
                            <span className={styles.orderTotal}>Total: R$ 120,50</span>
                        </div>
                        <Link href="/orders/1000" className={styles.viewDetail}>
                            Ver Detalhes
                        </Link>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
