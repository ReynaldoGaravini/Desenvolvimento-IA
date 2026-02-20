import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Badge } from "@/components/Badge";
import styles from "./page.module.css";
import Link from "next/link";

export default function OrderDetail({ params }: { params: { id: string } }) {
    return (
        <>
            <Header />
            <main className={`${styles.main} container`}>
                <div className={styles.header}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                        <Link href="/orders" style={{ color: 'var(--brand-primary)', textDecoration: 'none' }}>
                            &larr; Voltar
                        </Link>
                        <h1 className={styles.title}>Pedido #{params.id}</h1>
                    </div>
                    <Badge status="success">Entregue</Badge>
                </div>

                <div className={styles.card}>
                    <h2 className={styles.sectionTitle}>Detalhes do Pedido</h2>
                    <div className={styles.detailsGrid}>
                        <div className={styles.infoBlock}>
                            <span className={styles.infoLabel}>Endereço de Entrega</span>
                            <span className={styles.infoValue}>Rua A, 123 - Centro<br />São Paulo - SP</span>
                        </div>
                        <div className={styles.infoBlock}>
                            <span className={styles.infoLabel}>Método de Pagamento</span>
                            <span className={styles.infoValue}>Cartão de Crédito final 4321</span>
                        </div>
                    </div>
                </div>

                <div className={styles.card}>
                    <h2 className={styles.sectionTitle}>Itens</h2>
                    <div className={styles.list}>
                        <div className={styles.item}>
                            <div className={styles.itemInfo}>
                                <span className={styles.itemName}>Produto Exemplo 1</span>
                                <span className={styles.itemQty}>1x R$ 199,90</span>
                            </div>
                            <span className={styles.itemTotal}>R$ 199,90</span>
                        </div>

                        <div className={styles.item}>
                            <div className={styles.itemInfo}>
                                <span className={styles.itemName}>Produto Exemplo 2</span>
                                <span className={styles.itemQty}>2x R$ 49,90</span>
                            </div>
                            <span className={styles.itemTotal}>R$ 99,80</span>
                        </div>
                    </div>

                    <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border-color)', paddingTop: '16px' }}>
                        <span style={{ fontSize: '18px', fontWeight: 'bold' }}>Total do Pedido</span>
                        <span style={{ fontSize: '24px', fontWeight: 'bold', color: 'var(--brand-primary)' }}>R$ 299,70</span>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
