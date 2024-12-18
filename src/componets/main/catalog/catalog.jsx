import ProductCard from "./productCard/productCard";
import cardImg from "../../../assets/img/cloth.png";
import { data } from "react-router-dom";
import { useEffect, useState } from "react";

function Catalog() {
  const PRODUCTS_URL = "https://675ebc5f1f7ad24269967ed4.mockapi.io/Products";
  const [cardList, setCardList] = useState([]);

  const getAllCards = () => {
    fetch(PRODUCTS_URL, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setCardList(data);
      })
      .catch((rejected) => {
        console.log(rejected);
      });
    return cardList;
  };

  useEffect(() => {
    getAllCards();
  }, []);

  return (
    <div className="catalog">
      {cardList.map((card, key) => {
        return (
          <ProductCard
            img={card.img}
            title={card.title}
            description={card.description}
            id={card.id}
            key={key}
          />
        );
      })}
    </div>
  );
}

export default Catalog;
