import React from "react";
import { Link } from "react-router-dom";

function PhoneItem({ id, name, manufacturer, price, imageFileName }) {
  return (
    <div className="card mt-2">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={`../../assets/images/${imageFileName}`} 
            className="img-fluid rounded-start"
            alt={name}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">
              {manufacturer}   
            </p>
            <p className="text-muted">{price}€</p>
            <Link to={`/phones/${id}`} className="btn btn-success w-100">
              More details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhoneItem;
