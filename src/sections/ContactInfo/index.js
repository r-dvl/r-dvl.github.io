import React from "react";

export default function ContactInfo() {
  return (
    <>
      <div className="info info-horizontal">
        <div className="icon icon-primary">
          <i className="tim-icons icon-square-pin" />
        </div>
        <div className="description">
          <h4 className="info-title">Location</h4>
          <p>
            Algeciras (Cádiz),<br />
            Spain
          </p>
        </div>
      </div>
      <div className="info info-horizontal">
        <div className="icon icon-primary">
          <i className="tim-icons icon-email-85" />
        </div>
        <div className="description">
          <h4 className="info-title">Contact me by email</h4>
          <p>
            Raúl Del Valle Lima <br />
            rauldel.valle.lima@gmail.com <br />
            Mon - Fri, 8:00-17:00
          </p>
        </div>
      </div>
    </>
  );
}