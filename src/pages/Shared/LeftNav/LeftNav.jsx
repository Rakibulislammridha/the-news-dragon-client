import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RightsidedCards from "../RightsidedCards/RightsidedCards";

const LeftNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h3>All Category</h3>
      <div className="ps-4">
        {categories.map((category) => (
          <p key={category.id}>
            <Link
              className="text-decoration-none text-black"
              to={`/category/${category.id}`}
            >
              {category.name}
            </Link>
          </p>
        ))}
      </div>
      <RightsidedCards></RightsidedCards>
    </div>
  );
};

export default LeftNav;
