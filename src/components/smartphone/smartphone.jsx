import React from "react";
import "./smart.css";
import SmartphoneDeals from "./smartcard";
import MyButton from "../Button/Button";

const Smartphone = () => {
  return (
    <>
      <div className="smart_flex" style={{ marginTop: '2%' }}>
        <div className="smart_head">
          Grab the best deal on <span className="smart_color">Smartphone</span>
        </div>
        <div className="viewall">
          <MyButton variant="outlined" color="secondary" size="large">
            Viewall
          </MyButton>

   
        </div>
      </div>
      <SmartphoneDeals />
      
    </>
  );
};

export default Smartphone;
