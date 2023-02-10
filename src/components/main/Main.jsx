import React from "react";
import StepProgress from "./StepProgress";
import StepOne from "./steps/StepOne";
import StepTwo from "./steps/StepTwo";
import StepThree from "./steps/StepThree";
import ProgressControl from "./ProgressControl";
function Main() {
  return (
    <main class="site-main">
      <div class="main-container">
        <section
          class="register-container col col-lg-6 col-sm-12"
          data-phase="1"
          data-total-price="0"
        >
          <h2 class="register-title col col-12">結帳</h2>
          <StepProgress />
          <section class="form-container col col-12">
            <StepOne />
            <StepTwo />
            <StepThree />
          </section>
        </section>
        <section class="progress-control-container col col-lg-6 col-sm-12">
          <ProgressControl />
        </section>
      </div>
    </main>
  );
}

export default Main;
