import React from "react";

function Payment({ payment, titleclassName = "input-label" }) {
  return (
    <div className={payment.className}>
      <div className={titleclassName}>{payment.title}</div>
      <input type={payment.type} placeholder={payment.placeholder} />
    </div>
  );
}

function StepThree() {
  return (
    <form className="col col-12" data-phase="credit-card">
      <h3 className="form-title">付款資訊</h3>
      <section className="form-body col col-12">
        <div className="col col-12">
          <Payment
            payment={{
              className: "input-group input-w-lg-4 input-w-sm-full",
              title: "持卡人姓名",
              type: "text",
              placeholder: "John Doe",
            }}
          />
          {/* <div className="input-group input-w-lg-4 input-w-sm-full">
            <div className="input-label">持卡人姓名</div>
            <input type="text" placeholder="John Doe" />
          </div> */}
        </div>
        <div className="col col-12">
          <Payment
            payment={{
              className: "input-group input-w-lg-4 input-w-sm-full",
              title: "卡號",
              type: "text",
              placeholder: "1111 2222 3333 4444",
            }}
          />
          {/* <div className="input-group input-w-lg-4 input-w-sm-full">
            <div className="input-label">卡號</div>
            <input type="text" placeholder="1111 2222 3333 4444" />
          </div> */}
        </div>
        <div className="col col-12">
          <Payment
            payment={{
              className: "input-group input-w-lg-4 input-w-sm-full",
              title: "卡號",
              type: "text",
              placeholder: "MM/YY",
            }}
          />
          {/* <div className="input-group input-w-lg-3 input-w-sm-s3">
            <div className="input-label">有效期限</div>
            <input type="text" placeholder="MM/YY" />
          </div> */}
          <Payment
            payment={{
              className: "input-group input-w-lg-3 input-w-sm-s3",
              title: "CVC / CCV",
              type: "text",
              placeholder: "123",
            }}
          />
          {/* <div className="input-group input-w-lg-3 input-w-sm-s3">
            <div className="input-label">CVC / CCV</div>
            <input type="text" placeholder="123" />
          </div> */}
        </div>
      </section>
    </form>
  );
}

export default StepThree;
