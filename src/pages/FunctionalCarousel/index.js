import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function FunctionalCarousel() {
  const [products, setProducts] = useState([]);
  const { site } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const data = await fetch(
      `https://api.mercadolibre.com/sites/${site}/search?q=auriculares&limit=5`
    );
    const json = await data.json();
    setProducts(json.results);
  }

  return (
    <div>
      {products.map((item) => {
        return (
          <div>
            <img src={item.thumbnail} />
            <p>{item.title}</p>
          </div>
        );
      })}
    </div>
  );
}

export default FunctionalCarousel;
