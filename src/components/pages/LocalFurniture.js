import React from "react";
// import Popular from "../Popular/Popular.js";
import data_product from "../assets/data";
import "./furniture.css";
import ProductCard from "../pages/ProductCard.js";

function LocalFurniture() {
    const allProducts = [...data_product];
    return (
        <div className="furniture">
            <div className="card-section">
            {allProducts.map((item, i) => (
                    <ProductCard key={i} item={item} />
                     ))}
            </div>
            {/* <Popular data={data_product} title="POPULAR IN LOCAL FURNITURE" />  */}
        </div>
    );
}

export default LocalFurniture;
