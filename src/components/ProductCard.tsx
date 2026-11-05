import type { Product } from "../data/products";

type ProductCardProps = {
  product: Product;
  onAdd: (product: Product) => void;
};

function ProductCard({ product, onAdd }: ProductCardProps) {
  return (
    <article className="product-card">
      <div className="product-card-content">
        <h3>{product.name}</h3>

        <p className="product-price">
          ${product.price.toFixed(2)}
        </p>
      </div>

      <button
        className="add-button"
        onClick={() => onAdd(product)}
      >
        Add
      </button>
    </article>
  );
}

export default ProductCard;