import React from "react";
import "./header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faTruck } from '@fortawesome/free-solid-svg-icons';
const header = () => {
  return (
    <div>
      <div className="row1">
        <div className="row1_wel">Welcome to worldwide Megamart!</div>
        
       
        <div className="row1_del">
        <FontAwesomeIcon icon={faMapMarkerAlt} size="lg"  style={{ color: '#0077b6' }} />
        Deliver to 423651

        </div>
 
        <div className="row1_order">
        <FontAwesomeIcon icon={faTruck} size="lg" style={{ color: '#0077b6' }} />
        Track your Order</div>
        <div className="row1_all">All Offers</div>
      </div>
    </div>
  );
};

export default header;
