import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPhoneDetail } from "../services/phone-services";
import { Link } from "react-router-dom";

function DetailPhoneScreen() {
  const [phone, setPhone] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    getPhoneDetail(id)
      .then((phone) => setPhone(phone.data))
      .catch((error) => console.error(error));
  }, [id]);

  console.log(phone);
  return (
    <div className="container">
      <div className="d-flex justify-content-center">
        <img
          src={`../../assets/images/${phone?.imageFileName}`}
          alt={phone?.name}
        />
        <div className="mt-5 pt-5">
          <h1>{phone?.name}</h1>
          <h3>
            Manufactured by: <b>{phone?.manufacturer}</b>
          </h3>
          <p>{phone?.description}</p>
          <h4>Details:</h4>
          <p>
            Available in color: <b>{phone?.color}</b>
          </p>
          <p>
            Screen: <b>{phone?.screen}</b>
          </p>
          <p>
            Processor: <b>{phone?.processor}</b>
          </p>
          <p>
            Ram: <b>{phone?.ram} Gb</b>
          </p>
          <h3>
            Price: <b>{phone?.price}</b>
          </h3>
          <Link to={`/phones`} className="btn btn-primary mt-5">
            Go back
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DetailPhoneScreen;
