import React from "react";
//import Popular from "../Popular/Popular.js";
import data_product1 from "../assets/data1";
import "./furniture.css";
import ProductCard from "../pages/ProductCard.js";

function SecondHand() {
    const allProducts1 = [...data_product1];
    return (
        <div className="furniture">
            <div className="card-section">
        {allProducts1.map((item, i) => (
            <ProductCard key={i} item={item} />
             ))}
    </div>
            {/* <Popular data={data_product1} title="POPULAR IN SECOND HAND FURNITURE" /> */}
        </div>
    );
}

export default SecondHand;
