import { Link } from "react-router-dom";
import "./ProductCard.css";  // Import the CSS file

const ProductCard = ({ item }) => {
  return (
    <Link to={`/product/${item.id}`} className="product-card">
      <div className="product-card-inner">
        <img
          src={item.image}
          alt={item.name}
          className="product-image"
        />
        <div className="product-info">
          <h2 className="product-name">{item.name}</h2>
          <p className="old-price">&#8377;{item.old_price}</p>
          <p className="new-price">&#8377;{item.new_price}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
