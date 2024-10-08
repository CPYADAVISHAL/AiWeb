
import React, { useContext } from 'react';
import "./Smartcart.css";
import MyButton from "../Button/Button";
import P1 from "../../image/p1.png";
import P2 from "../../image/p2.png";
import P3 from "../../image/P3.png";
import P4 from "../../image/P4.png";
import P5 from "../../image/P5.png";
import { CartContext } from "../../context/CartContext"

const deals = [
  {
    id: 1,
    name: "Galaxy S22 Ultra",
    originalPrice: "₹74999",
    discountedPrice: "₹32999",
    savings: "₹32999",
    imageUrl: P2,
  },
  {
    id: 2,
    name: "Galaxy M13 (4GB | 64 GB)",
    originalPrice: "₹14999",
    discountedPrice: "₹10499",
    savings: "₹4500",
    imageUrl: P1,
  },
  {
    id: 3,
    name: "Galaxy M33 (4GB | 64 GB)",
    originalPrice: "₹24999",
    discountedPrice: "₹16999",
    savings: "₹8000",
    imageUrl: P4,
  },
  {
    id: 4,
    name: "Galaxy M53 (4GB | 64 GB)",
    originalPrice: "₹40999",
    discountedPrice: "₹31999",
    savings: "₹9000",
    imageUrl: P3,
  },
];

const SmartphoneDeals = () => {
  const { addToCart } = useContext(CartContext);
  return (
    <div className="deals-container">
      <div className="deals-grid">
        {deals.map((deal) => (
          <div className="deal-card" key={deal.id}>
            <img src={deal.imageUrl} alt={deal.name} />
            {/* <img src={deal.imageUrl} alt={deal.name} /> */}
            <h3>{deal.name}</h3>
            <p className="original-price">{deal.originalPrice}</p>
            <p className="discounted-price">{deal.discountedPrice}</p>
            <p>
              <hr />
            </p>
            <p className="savings">Save - {deal.savings}</p>
            <MyButton variant="outlined" color="success">
              Buy Now
            </MyButton>
            <div className="AddtoCart">   <MyButton  variant="outlined" color="secondary" onClick={() => addToCart(deals)} >
              Add To Cart
            </MyButton></div>
            
          </div>
        
        ))}
      </div>
    </div>
  );
};

export default SmartphoneDeals;
