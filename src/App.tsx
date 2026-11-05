import { useState } from "react";

import Header from "./components/Header";
import CategoryMenu from "./components/CategoryMenu";
import ProductList from "./components/ProductList";

import { products } from "./data/products";
import type { Product } from "./data/products";

function App() {
  const [selectedCategory, setSelectedCategory] =
    useState("Coffee");

  function handleCategoryChange(category: string) {
    setSelectedCategory(category);
  }

  function handleAdd(product: Product) {
    console.log("Added:", product.name);
  }

  const filteredProducts = products.filter(
    (product) => product.category === selectedCategory
  );

  return (
    <div className="app">
      <Header />

      <main className="pos-layout">
        <CategoryMenu
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
        />

        <section className="products-area">
          <ProductList
            products={filteredProducts}
            onAdd={handleAdd}
          />
        </section>
      </main>
    </div>
  );
}

export default App;