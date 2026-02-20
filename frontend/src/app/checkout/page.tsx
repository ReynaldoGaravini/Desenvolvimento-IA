import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import styles from "./page.module.css";
import Link from "next/link";

export default function Checkout() {
    return (
        <>
            <Header />
            <main className={`${styles.main} container`}>
                <h1 className={styles.title}>Checkout</h1>

                <div className={styles.content}>
                    <div>
                        <div className={styles.stepBlock}>
                            <h2 className={styles.stepTitle}>
                                <span className={styles.stepNumber}>1</span>
                                Identificação
                            </h2>
                            <div className={styles.formGrid}>
                                <Input label="E-mail" placeholder="seu@email.com" defaultValue="joao@exemplo.com" disabled />
                                <Input label="CPF" placeholder="000.000.000-00" />
                            </div>
                        </div>

                        <div className={styles.stepBlock}>
                            <h2 className={styles.stepTitle}>
                                <span className={styles.stepNumber}>2</span>
                                Endereço de Entrega
                            </h2>
                            <div className={styles.formGrid}>
                                <div style={{ gridColumn: 'span 2' }}>
                                    <Input label="CEP" placeholder="00000-000" />
                                </div>
                                <div style={{ gridColumn: 'span 2' }}>
                                    <Input label="Rua" placeholder="Av. Principal" />
                                </div>
                                <Input label="Número" placeholder="123" />
                                <Input label="Complemento" placeholder="Apto 42" />
                                <Input label="Bairro" placeholder="Centro" />
                                <Input label="Cidade" placeholder="São Paulo" />
                            </div>
                        </div>

                        <div className={styles.stepBlock}>
                            <h2 className={styles.stepTitle}>
                                <span className={styles.stepNumber}>3</span>
                                Pagamento
                            </h2>
                            <div className={styles.formGrid}>
                                <div style={{ gridColumn: 'span 2' }}>
                                    <Input label="Número do Cartão" placeholder="0000 0000 0000 0000" />
                                </div>
                                <div style={{ gridColumn: 'span 2' }}>
                                    <Input label="Nome Impresso no Cartão" placeholder="JOAO SILVA" />
                                </div>
                                <Input label="Validade" placeholder="MM/AA" />
                                <Input label="CVV" placeholder="123" />
                            </div>
                        </div>
                    </div>

                    <div className={styles.summary}>
                        <h2 className={styles.summaryTitle}>Resumo do Pedido</h2>
                        <div className={styles.summaryRow}>
                            <span>Subtotal</span>
                            <span>R$ 299,70</span>
                        </div>
                        <div className={styles.summaryRow}>
                            <span>Frete</span>
                            <span>R$ 15,00</span>
                        </div>
                        <div className={styles.summaryTotal}>
                            <span>Total a Pagar</span>
                            <span>R$ 314,70</span>
                        </div>

                        <Link href="/orders/1001" style={{ textDecoration: 'none' }}>
                            <Button fullWidth style={{ marginTop: '24px' }}>
                                Finalizar Compra
                            </Button>
                        </Link>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
