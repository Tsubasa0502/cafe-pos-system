import type { Product } from "../data/products";
import ProductCard from "./ProductCard";

type ProductListProps = {
  products: Product[];
  onAdd: (product: Product) => void;
};

function ProductList({
  products,
  onAdd,
}: ProductListProps) {
  return (
    <section className="product-list">
      <h2>Products</h2>

      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAdd={onAdd}
          />
        ))}
      </div>
    </section>
  );
}

export default ProductList;