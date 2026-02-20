import { Button } from "@/components/Button";
import styles from "../list.module.css";
import Link from "next/link";

export default function Customers() {
    return (
        <>
            <div className={styles.header}>
                <h1 className={styles.title}>Clientes</h1>
                <div className={styles.actions}>
                    <Button variant="secondary">Pesquisar</Button>
                    <Button>Cadastrar Novo</Button>
                </div>
            </div>

            <div className={styles.content}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome do Cliente</th>
                            <th>E-mail</th>
                            <th>Telefone</th>
                            <th>Endereço</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>João Silva</td>
                            <td>joao@exemplo.com</td>
                            <td>(11) 98888-7777</td>
                            <td>Rua A, 123 - Centro</td>
                            <td>
                                <div className={styles.actionsCell}>
                                    <Link href="#" className={styles.actionLink}>Editar</Link>
                                    <button className={styles.actionDelete}>Excluir</button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
