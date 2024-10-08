import React from "react";
import "./Categcart.css";
import P1 from "../../image/p1.png";
import P2 from "../../image/C2.png";
import P3 from "../../image/C3.png";
import P4 from "../../image/C4.png";
import P5 from "../../image/C5.png";
import P6 from "../../image/C6.png";
import P7 from "../../image/C7.png";
// import C1 from "../../image/c1.png";
// import C2 from "../../image/c2.png";
// import C3 from "../../image/c3.png";
// import C4 from "../../image/xc4.png";
// import C5 from "../../image/c5.png";

const deals = [
  {
    id: 1,
    name: "Mobile",
    imageUrl: P1,
  },
  {
    id: 2,
    name: "Cosmetics",
    imageUrl: P2,
  },
  {
    id: 3,
    name: "Electronics",
    imageUrl: P4,
  },
  {
    id: 4,
    name: "Furniture",
       imageUrl: P3,  },
  {
    id: 5,
    name: "Watch",
    imageUrl: P5,
  },
  {
    id: 4,
    name: "Decor",
       imageUrl: P6,  },
  {
    id: 5,
    name: "Accessories",
    imageUrl: P7,
  },
];

const SmartphoneDeals = () => {
  return (
    <div className="cdeals-container">
    
      <div className="cdeals-grid">
        {deals.map((deal) => (
          <div className="cdeal-card" key={deal.id}>
            <img src={deal.imageUrl} alt={deal.name} />
            <h3>{deal.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SmartphoneDeals;
