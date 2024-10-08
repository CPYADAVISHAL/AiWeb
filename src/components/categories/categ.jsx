import React from "react";
import "../smartphone/smart.css";
import CategCard from "./CategCard.jsx";
import MyButton from "../Button/Button";
const categ = () => {
  return (
    <div>
      <div className="smart_flex">
        <div className="smart_head">
          Shop from <span className="smart_color">Top Categories</span>
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
        <CategCard />

    </div>
  );
};

export default categ;
