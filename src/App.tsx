function App() {
  return (
    <div>
      <h1>☕ Cafe POS</h1>

      <div>
        <h2>Categories</h2>
        <button>All</button>
        <button>Coffee</button>
        <button>Drinks</button>
        <button>Food</button>
      </div>

      <div>
        <h2>Products</h2>

        <div>
          <h3>Latte</h3>
          <p>$5.00</p>
          <button>Add</button>
        </div>

        <div>
          <h3>Americano</h3>
          <p>$4.00</p>
          <button>Add</button>
        </div>

        <div>
          <h3>Cappuccino</h3>
          <p>$5.00</p>
          <button>Add</button>
        </div>
      </div>

      <div>
        <h2>Current Order</h2>
        <p>No items yet</p>

        <hr />

        <p>Subtotal: $0.00</p>
        <p>Tax: $0.00</p>
        <h3>Total: $0.00</h3>

        <button>CHECKOUT</button>
      </div>
    </div>
  );
}

export default App;