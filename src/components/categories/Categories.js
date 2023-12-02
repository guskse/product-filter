import "./Categories.css";


//transformar a primeira letra em Maiúsculo
const capitalize = (word) => {
  return word.charAt(0).toUpperCase() + word.slice(1); 
}

function Categories({ categories, filterProducts }) {
  return (
    <div className="--flex-center">
      {categories.map((category, index) => {
        return (
          <button
            key={index}
            type="button"
            className="btn --btn --btn-secondary"
            onClick={() => filterProducts(category)}
          >
            {capitalize(category)}
          </button>
        );
      })}
    </div>
  );
}

export default Categories;
