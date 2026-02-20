import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import styles from "./layout.module.css";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Header />
            <div className={styles.layout}>
                <Sidebar />
                <main className={styles.main}>
                    {children}
                </main>
            </div>
        </>
    );
}
