// import { useParams, Link } from "react-router-dom";
// import data from "../assets/data";       // Local furniture
// import data1 from "../assets/data1";     // Rental furniture
// import data2 from "../assets/data2";     // Second-hand furniture
// import './ProductDetails.css';
// const ProductDetails = () => {
//   const { id } = useParams();

//   // Combine all product data
//   const allProducts = [...data, ...data1, ...data2];

//   // Find the product based on ID (convert id to number)
//   const product = allProducts.find(p => p.id === parseInt(id));

//   if (!product) return <div className="p-6 text-red-600">Product not found.</div>;

//   return (
//     <div className="product-outer">
//       <img
//         src={product.image}
//         alt={product.name}
//         className="product-image"
//       />
//       <h1 className="product-title">{product.name}</h1>
//       <p className="product-price">old price : {product.old_price}</p>
//       <p className="product-price">new price :{product.new_price}</p>
      
      

//       <p className="product-description">Description: <br></br>{product.description}</p>

//       {/* <Link
//         to="/local-furniture"
//         className="mt-6 inline-block text-blue-600 hover:underline"
//       >
//         ← Back to LocalFurniture
//       </Link> */}
//     </div>
//   );
// };

// export default ProductDetails;

import { useParams } from "react-router-dom";
import { useState } from "react";
import data from "../assets/data";
import data1 from "../assets/data1";
import data2 from "../assets/data2";
import './ProductDetails.css';
import { Button } from "../Button"; // Adjust path if necessary

const ProductDetails = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);

  const allProducts = [...data, ...data1, ...data2];
  const product = allProducts.find(p => p.id === parseInt(id));

  if (!product) return <div className="p-6 text-red-600">Product not found.</div>;

  const handleAddToCart = () => {
    console.log("Added to cart:", product, "Quantity:", quantity);
    // Add cart logic here later (context/localStorage/etc.)
  };

  return (
    <div className="product-outer">
      <img src={product.image} alt={product.name} className="product-image" />
      <h1 className="product-title">{product.name}</h1>
      <p className="product-price">Old Price: {product.old_price}</p>
      <p className="product-price">New Price: {product.new_price}</p>
      <p className="product-description">Description:<br />{product.description}</p>

      <div className="product-controls">
        <label className="quantity-label" htmlFor="quantity">Quantity:</label>
        <select
          id="quantity"
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value))}
          className="quantity-dropdown"
        >
          {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
            <option key={num} value={num}>{num}</option>
          ))}
        </select>

        <Button
          buttonStyle="btn--primary black-border"
          buttonSize="btn--medium"
          onClick={handleAddToCart}
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductDetails;
