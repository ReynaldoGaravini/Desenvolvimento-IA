import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/Card";
import { Button } from "@/components/Button";
import styles from "./page.module.css";

const MOCK_PRODUCTS = [
  { id: 1, name: "Produto Exemplo 1", price: 199.9, image: "https://lh3.googleusercontent.com/aida/AOfcidXY3oWtipS-sjfYhJ4YWfC-rbM9ipIF14MKOJhUyZaNyyi7w1O9BSrcW5137WjGX1JuPz8ijAvVksZrZsORn6Pba8VJ4lM-QXRkceh3Xq6nKR5Y7ZeUUKexuLfFT2p2m5z_PiEVpQ3GLuEdrqdrL4maBg6hK4dz6TUNKEh9djPXfmYFCmkKu4Aa16eowYQjwmf84JZ25_eweVN-vcp6J1xa9B8pIy7-uP5nRVNmAAY-hifmS2We7HIuBw" },
  { id: 2, name: "Produto Exemplo 2", price: 49.9, image: "https://via.placeholder.com/400?text=Produto+2" },
  { id: 3, name: "Produto Exemplo 3", price: 89.9, image: "https://via.placeholder.com/400?text=Produto+3" },
  { id: 4, name: "Produto Exemplo 4", price: 29.9, image: "https://via.placeholder.com/400?text=Produto+4" },
];

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.hero}>
          <div className="container">
            <h2>DevAI Vitrine Principal</h2>
            <p>O melhor e-commerce para suas necessidades diárias.</p>
          </div>
        </div>

        <div className="container">
          <h2 className={styles.sectionTitle}>Nossos Produtos</h2>
          <div className={styles.grid}>
            {MOCK_PRODUCTS.map(product => (
              <ProductCard
                key={product.id}
                title={product.name}
                price={product.price}
                imageUrl={product.image}
              >
                <Button fullWidth>Adicionar ao Carrinho</Button>
              </ProductCard>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
