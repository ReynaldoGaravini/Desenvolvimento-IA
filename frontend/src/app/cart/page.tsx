import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import styles from "./page.module.css";
import Link from "next/link";

export default function Cart() {
    return (
        <>
            <Header />
            <main className={`${styles.main} container`}>
                <h1 className={styles.title}>Meu Carrinho</h1>

                <div className={styles.content}>
                    <div className={styles.list}>
                        <div className={styles.item}>
                            <img src="https://via.placeholder.com/80?text=Produto+1" alt="Produto 1" className={styles.itemImage} />
                            <div className={styles.itemDetails}>
                                <div className={styles.itemName}>Produto Exemplo 1</div>
                                <div className={styles.itemPrice}>R$ 199,90</div>
                            </div>
                            <div className={styles.quantity}>
                                <Input label="" type="number" defaultValue="1" min="1" />
                            </div>
                            <button className={styles.remove}>Remover</button>
                        </div>

                        <div className={styles.item}>
                            <img src="https://via.placeholder.com/80?text=Produto+2" alt="Produto 2" className={styles.itemImage} />
                            <div className={styles.itemDetails}>
                                <div className={styles.itemName}>Produto Exemplo 2</div>
                                <div className={styles.itemPrice}>R$ 49,90</div>
                            </div>
                            <div className={styles.quantity}>
                                <Input label="" type="number" defaultValue="2" min="1" />
                            </div>
                            <button className={styles.remove}>Remover</button>
                        </div>
                    </div>

                    <div className={styles.summary}>
                        <h2 className={styles.summaryTitle}>Resumo do Pedido</h2>
                        <div className={styles.summaryRow}>
                            <span>Subtotal</span>
                            <span>R$ 299,70</span>
                        </div>
                        <div className={styles.summaryTotal}>
                            <span>Total</span>
                            <span>R$ 299,70</span>
                        </div>

                        <Button fullWidth style={{ marginTop: '24px' }}>
                            Confirmar Pedido
                        </Button>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
