import React, { useState } from "react";
import "./styles.css";
import OrderDetail from "./OrderDetail";
import {useNavigate} from "react-router-dom";

export default function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  const navigate = useNavigate();

  const OrderDetailNavigate = () => {
    navigate('/driverHome/driverPage/driverOrder');
  }

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
      <div className="button-grid">
      <button onClick={toggleModal} className="btn-modal">
        Open
      </button>
      </div>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <div className="whitespace-container">
            <h2>(Entree)</h2>
            <p>(Side1)                                                  Delivering to: </p>
            <p>(Side2)                                                  Picking up: </p>
            <p>(Side3)                                                  Name: </p>
            <p>(Side4)                                                  User Notes: </p>
            </div>
            <button className="close-modal" onClick={toggleModal}>
              DENY
            </button>
            <button className="close-modal2" onClick={toggleModal && OrderDetailNavigate}>
              ACCEPT
            </button>
          </div>
        </div>
      )}
    </>
  );
}