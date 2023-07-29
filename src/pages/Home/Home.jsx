import { useContext } from "react";

import "./home.css";
import { CategoriesContext } from "../../contexts/categoriesContext";
import { useNavigate } from "react-router-dom";

export function Home() {
  const navigate = useNavigate();

  const {
    categoriesState: { categories },
    setCategorySelected,
  } = useContext(CategoriesContext);

  function handleCategory(_id, category) {
    setCategorySelected(_id);
    navigate(`/${category.toLowerCase()}`);
  }

  return (
    <div className="home-container">
      <div className="categories-content-container">
        <h2>Categories</h2>
        <div className="categories-container">
          {categories?.map(({ _id, thumbnail, category }) => (
            <div
              key={_id}
              className="category-container"
              onClick={() => handleCategory(_id, category)}
            >
              <img src={thumbnail} alt={category} />
              <p>
                <strong>{category}</strong>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
