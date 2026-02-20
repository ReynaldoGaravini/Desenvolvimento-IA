import { Button } from "@/components/Button";
import { Badge } from "@/components/Badge";
import styles from "./page.module.css";
import Link from "next/link";

export default function OrderDetail({ params }: { params: { id: string } }) {
    return (
        <div className={styles.main}>
            <div className={styles.header}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <Link href="/admin/orders" style={{ color: 'var(--brand-primary)', textDecoration: 'none' }}>
                        &larr; Voltar
                    </Link>
                    <h1 className={styles.title}>Pedido #{params.id}</h1>
                    <Badge status="success">Entregue</Badge>
                </div>
            </div>

            <div className={styles.card}>
                <h2 className={styles.sectionTitle}>Detalhes do Cliente</h2>
                <div className={styles.detailsGrid}>
                    <div className={styles.infoBlock}>
                        <span className={styles.infoLabel}>Nome</span>
                        <span className={styles.infoValue}>João Silva</span>
                    </div>
                    <div className={styles.infoBlock}>
                        <span className={styles.infoLabel}>Endereço</span>
                        <span className={styles.infoValue}>Rua A, 123 - Centro</span>
                    </div>
                    <div className={styles.infoBlock}>
                        <span className={styles.infoLabel}>E-mail</span>
                        <span className={styles.infoValue}>joao@exemplo.com</span>
                    </div>
                    <div className={styles.infoBlock}>
                        <span className={styles.infoLabel}>Telefone</span>
                        <span className={styles.infoValue}>(11) 98888-7777</span>
                    </div>
                </div>
            </div>

            <div className={styles.card}>
                <h2 className={styles.sectionTitle}>Itens do Pedido</h2>
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

                <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '18px', fontWeight: 'bold' }}>Total do Pedido</span>
                    <span style={{ fontSize: '24px', fontWeight: 'bold', color: 'var(--brand-primary)' }}>R$ 299,70</span>
                </div>
            </div>

            <div className={styles.statusSection}>
                <div style={{ flex: 1 }}>
                    <h3 style={{ marginBottom: '8px' }}>Alterar Status do Pedido</h3>
                    <p style={{ fontSize: '14px', color: 'var(--feedback-neutral)' }}>
                        Atualize o status do pedido para que o cliente possa acompanhar o progresso.
                    </p>
                </div>
                <div style={{ display: 'flex', gap: '8px' }}>
                    <Button variant="secondary">Despachado</Button>
                    <Button>Entregue</Button>
                </div>
            </div>
        </div>
    );
}
