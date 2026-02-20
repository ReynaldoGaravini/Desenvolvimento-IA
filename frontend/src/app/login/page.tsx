import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import Link from "next/link";
import styles from "./page.module.css";

export default function Login() {
    return (
        <>
            <Header />
            <main className={styles.main}>
                <div className={styles.card}>
                    <h1 className={styles.title}>Acessar Conta</h1>
                    <form className={styles.form}>
                        <Input label="E-mail" type="email" placeholder="seu@email.com" />
                        <Input label="Senha" type="password" placeholder="••••••••" />

                        <div className={styles.actions}>
                            <Button fullWidth type="button">Entrar</Button>
                            <Link href="/register" className={styles.link}>
                                Criar nova conta
                            </Link>
                        </div>
                    </form>
                </div>
            </main>
            <Footer />
        </>
    );
}
