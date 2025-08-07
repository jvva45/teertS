import './ProductSearch.css'
const ProductSearch = ({ onSearch, onAdd,onToggleTable }) => {
  return (
    <div className="productSearch">
      <label htmlFor="product-input">Search product:</label>
      <input
        id="product-input"
        type="text"
        placeholder="Type a product name..."
        onChange={(e) => onSearch(e.target.value)}
      />
      <button onClick={onAdd}>Add</button>
      <button onClick={onToggleTable}>Mostrar Produtos</button>
    </div>
  );
};

export default ProductSearch;
