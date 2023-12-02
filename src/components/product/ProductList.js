import "./ProductList.css";
import Search from "../search/Search";
import Categories from "../categories/Categories";
import Product from "./Product";
import { useState, useEffect } from "react";
import { products as productData } from "../../products-data";

const allCategories = [
  "all",
  ...new Set(productData.map((product) => product.category)),
];

function ProductList() {
  //STATE
  const [products, setProducts] = useState(productData);
  const [search, setSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState(allCategories);

  //functions
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  //filtrar por categoria (clicando no botao da categoria)
  const filterProduct = (category) => {
    if (category === "all") {
      setProducts(productData);
      return;
    }
    const newProducts = productData.filter(
      (product) => product.category === category
    );
    setProducts(newProducts);
  };

  useEffect(() => {
    setFilteredProducts(
      products.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, products]);

  return (
    <>
      <div className="header">
        <header className="container">
          <h1 className="--color-light --text-center">
            {" "}
            <span className="--color-danger">Product</span> Filter
          </h1>
          <div className="--flex-between --flex-dir-column --py">
            <Search inputValue={search} onInputChange={handleSearch} />
            <Categories
              categories={categories}
              filterProducts={filterProduct}
            />
          </div>
        </header>
      </div>
      <div className="product-container">
        <div className="products container --grid-25 --py2">
          {filteredProducts.length === 0 ? (
            <h3>No product found...</h3>
          ) : (
            filteredProducts.map((filteredProduct) => {
              const { id, title, price, img } = filteredProduct;
              return (
                <div key={id}>
                  <Product title={title} price={price} img={img} />
                </div>
              );
            })
          )}
        </div>
      </div>
    </>
  );
}

export default ProductList;
