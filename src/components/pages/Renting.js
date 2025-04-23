import React from "react";
//import Popular from "../Popular/Popular.js";
import "./furniture.css";
import data_product2 from "../assets/data2.js";
import ProductCard from "../pages/ProductCard.js";


function SecondHand() {
    const allProducts2 = [...data_product2];
    return (
        <div className="furniture">
            <div className="card-section">
        {allProducts2.map((item, i) => (
            <ProductCard key={i} item={item} />
             ))}

</div>
            
        </div>
    );
}

export default SecondHand;