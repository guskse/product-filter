import "./Search.css";

function Search({ inputValue, onInputChange }) {
  return (
    <div className="--form-control">
      <input
        type="text"
        placeholder="Search products..."
        value={inputValue}
        onChange={onInputChange}
      />
    </div>
  );
}

export default Search;
