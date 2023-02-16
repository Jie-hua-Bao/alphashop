import React from "react";
import StepProgress from "./StepProgress";
import StepOne from "./Steps/StepOne";
import StepTwo from "./Steps/StepTwo";
import StepThree from "./Steps/StepThree";
import ProgressControl from "./ProgressControl";
import Cart from "./Cart";
function Main() {
  return (
    <main className="site-main">
      <div className="main-container">
        <section
          className="register-container col col-lg-6 col-sm-12"
          data-phase="1"
          data-total-price="0"
        >
          <h2 className="register-title col col-12">結帳</h2>
          <StepProgress />
          <section className="form-container col col-12">
            <StepOne />
            <StepTwo />
            <StepThree />
          </section>
        </section>
        <Cart />
        <ProgressControl />
      </div>
    </main>
  );
}

export default Main;
