type CategoryMenuProps = {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
};

function CategoryMenu({
  selectedCategory,
  onCategoryChange,
}: CategoryMenuProps) {
  const categories = [
    "Coffee",
    "Food",
    "Drinks",
    "Dessert",
    "Specials",
  ];

  return (
    <aside className="category-menu">
      <h2>Categories</h2>

      {categories.map((category) => (
        <button
          key={category}
          className={`category-button ${
            selectedCategory === category ? "active" : ""
          }`}
          onClick={() => onCategoryChange(category)}
        >
          {category}
        </button>
      ))}
    </aside>
  );
}

export default CategoryMenu;