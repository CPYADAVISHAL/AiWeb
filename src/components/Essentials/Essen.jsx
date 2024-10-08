import React from "react";
import "./EssentialsDeals.css";
import P1 from "../../image/p2.png";// 
import P2 from "../../image/K2.png";
import P3 from "../../image/K3.png";
import P4 from "../../image/K4.png";
import P5 from "../../image/K5.png";
import "../smartphone/smart.css";
import MyButton from "../Button/Button";
const deals = [
  {
    id: 1,
    name: "Daily Essentials",
    discount: "UP TO 50% OFF",
    imageUrl: P1,
  },
  {
    id: 2,
    name: "Vegetables",
    discount: "UP TO 50% OFF",
    imageUrl: P2,
  },
  {
    id: 3,
    name: "Fruits",
    discount: "UP TO 50% OFF",
    imageUrl: P3,
  },
  {
    id: 4,
    name: "Strawberry",
    discount: "UP TO 50% OFF",
    imageUrl:P4,
  },
  {
    id: 5,
    name: "Mango",
    discount: "UP TO 50% OFF",
    imageUrl:P5,
  },
//   {
//     id: 6,
//     name: "Cherry",
//     discount: "UP TO 50% OFF",
//     imageUrl: P6,
//   },
];

const EssentialsDeals = () => {
  return (
    <div className="essentials-container">
    <div className="smart_flex">
     <div className="smart_head">
          Daily <span className="smart_color">Essentials</span>
        </div>
        <div className="viewall">
        <MyButton
              variant="outlined"
              color="secondary"
              size="large"
           
            >
 Viewall
            </MyButton>
            </div>
            </div>
      
      <div className="essentials-grid">
        {deals.map((deal) => (
          <div className="deal-card" key={deal.id}>
            <img src={deal.imageUrl} alt={deal.name} className="deal-image" />
            <h3>{deal.name}</h3>
            <p className="discount">{deal.discount}</p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default EssentialsDeals;
