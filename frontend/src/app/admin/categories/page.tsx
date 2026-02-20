import { Button } from "@/components/Button";
import { Badge } from "@/components/Badge";
import styles from "../list.module.css";
import Link from "next/link";

export default function Categories() {
    return (
        <>
            <div className={styles.header}>
                <h1 className={styles.title}>Categorias</h1>
                <div className={styles.actions}>
                    <Button variant="secondary">Pesquisar</Button>
                    <Button>Cadastrar Nova</Button>
                </div>
            </div>

            <div className={styles.content}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome da Categoria</th>
                            <th>Status</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Eletrônicos</td>
                            <td><Badge status="success">Ativo</Badge></td>
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
