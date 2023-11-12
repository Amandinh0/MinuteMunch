import React, { useState } from "react";
import "./styles.css";
import {useNavigate} from "react-router-dom";

export default function OrderListItem() {

  const navigate = useNavigate();

  const OrderDetailNavigate = () => {
    navigate('/driverHome/driverPage/driverOrderPreview');
  }

  return (
    <>
      <div className="button-grid">
      <button onClick={OrderDetailNavigate} className="btn-modal">
        View Order
      </button>
      </div>
    </>
  );
}