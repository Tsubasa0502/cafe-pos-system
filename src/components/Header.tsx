function Header() {
  return (
    <header className="header">

      {/*Menu*/}
      <button className="header-menu-button">
        ☰
      </button>

      {/*Logo*/}
      <div className="header-logo">
        <h1>Flowly</h1>
      </div>

      {/*Register*/}
      <div className="header-info">
        <span>Register #01</span>
      </div>

      {/*Cashier*/}
      <div className="header-info">
        <span>Cashier: Tsubasa</span>
      </div>

      {/*Search*/}
      <div className="search-bar">
        <span>🔍</span>
        <input
          type="text"
          placeholder="Search..."
        />
      </div>

       {/* Notifications */}
      <button className="header-icon">
        🔔
      </button>

      {/* Edit */}
      <button className="header-icon">
        ✏️
      </button>

      {/* Settings */}
      <button className="header-icon">
        ⚙️
      </button>
    </header>
  );
}

export default Header;