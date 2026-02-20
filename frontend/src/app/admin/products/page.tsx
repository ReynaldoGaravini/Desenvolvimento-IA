import { Button } from "@/components/Button";
import { Badge } from "@/components/Badge";
import styles from "../list.module.css";
import Link from "next/link";

export default function Products() {
    return (
        <>
            <div className={styles.header}>
                <h1 className={styles.title}>Produtos</h1>
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
                            <th>Produto</th>
                            <th>Categoria</th>
                            <th>Preço</th>
                            <th>Estoque</th>
                            <th>Status</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Produto Exemplo</td>
                            <td>Eletrônicos</td>
                            <td>R$ 199,90</td>
                            <td>45 un.</td>
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
