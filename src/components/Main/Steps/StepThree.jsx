import React, { useState } from "react";
import { MainContext } from "../../../contexts/MainContext";
import { useContext } from "react";

function Payment({ payment, titleClassName = "input-label", onChange, value }) {
  return (
    <div className={payment.className}>
      <div className={titleClassName}>{payment.title}</div>
      <input
        type={payment.type}
        placeholder={payment.placeholder}
        onChange={onChange}
        value={value}
      />
    </div>
  );
}

function StepThree() {
  const [creditCard, setCreditCard] = useContext(MainContext).pay;
  //item 是陣列裡的key
  function handleChange(e, item) {
    setCreditCard({
      ...creditCard,
      [item]: e.target.value,
    });
  }

  return (
    <form className="col col-12" data-phase="credit-card">
      <h3 className="form-title">付款資訊</h3>
      <section className="form-body col col-12">
        <div className="col col-12">
          <Payment
            onChange={(e) => handleChange(e, "name")}
            value={creditCard.name}
            payment={{
              className: "input-group input-w-lg-4 input-w-sm-full",
              title: "持卡人姓名",
              type: "text",
              placeholder: "John Doe",
            }}
          />
        </div>
        <div className="col col-12">
          <Payment
            onChange={(e) => handleChange(e, "number")}
            value={creditCard.number}
            payment={{
              className: "input-group input-w-lg-4 input-w-sm-full",
              title: "卡號",
              type: "text",
              placeholder: "1111 2222 3333 4444",
            }}
          />
        </div>
        <div className="col col-12">
          <Payment
            onChange={(e) => handleChange(e, "date")}
            value={creditCard.date}
            payment={{
              className: "input-group input-w-lg-3 input-w-sm-full",
              title: "日期",
              type: "text",
              placeholder: "MM/YY",
            }}
          />
          <Payment
            onChange={(e) => handleChange(e, "cvc")}
            value={creditCard.cvc}
            payment={{
              className: "input-group input-w-lg-3 input-w-sm-s3",
              title: "CVC / CCV",
              type: "text",
              placeholder: "123",
            }}
          />
        </div>
      </section>
    </form>
  );
}

export default StepThree;
