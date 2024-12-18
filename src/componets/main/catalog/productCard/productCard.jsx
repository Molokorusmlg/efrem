import "./productCard.scss";

function ProductCard({ img, title, description, id }) {
  return (
    <div className="card">
      <img className="card__img" src={img} alt={description} />
      <p className="card__title">{title}</p>
      <p className="card__description">{description}</p>
      <button type="button">Buy</button>
    </div>
  );
}

export default ProductCard;
