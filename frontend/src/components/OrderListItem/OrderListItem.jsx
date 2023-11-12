import React, { useState } from "react";
import "./styles.css";
import {useNavigate} from "react-router-dom";

export default function OrderListItem({order, itemClicked}) {

  const navigate = useNavigate();

  const OrderDetailNavigate = () => {
    navigate('/driverHome/driverPage/driverOrderPreview');
    itemClicked(order);
  }

  return (
    <>
      <div className="button-grid">
      <button onClick={OrderDetailNavigate} className="container">
        <h1 className="pay">Pay: {order.payout}</h1>
        <div className="items-swipes">Items: {order.diningSwipes}</div>
        <div className="locations">{order.diningHall} to {order.location.residenceArea}</div>
      </button>
      </div>
    </>
  );
}