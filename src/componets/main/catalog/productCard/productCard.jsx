function ProductCard({ img, title, description, id }) {
  return (
    <div className="card">
      <img
        className="card__img"
        src="https://i.ibb.co/T8Q89vV/gg.png"
        alt={description}
      />
      <p className="card__title">{title}</p>
      <p className="card__description">{description}</p>
      <button className="card__button" type="button">
        Buy
      </button>
    </div>
  );
}

export default ProductCard;
