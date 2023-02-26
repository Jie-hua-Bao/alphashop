import React from "react";
import StepProgress from "./StepProgress";
import StepOne from "./Steps/StepOne";
import StepTwo from "./Steps/StepTwo";
import StepThree from "./Steps/StepThree";
import ProgressControl from "./ProgressControl";
import Cart from "./Cart";
import { useState } from "react";
function Main() {
  {  /*設定當前狀態為step 1*/ }
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <main className="site-main">
      <div className="main-container">
        <section
          className="register-container col col-lg-6 col-sm-12"
          data-phase={1}
          data-total-price={0}
        >
          <h2 className="register-title col col-12">結帳</h2>
          <StepProgress currentStep={currentStep} />
          <section className="form-container col col-12">
            {currentStep === 1 && <StepOne />}
            {currentStep === 2 && <StepTwo />}
            {currentStep === 3 && <StepThree />}
          </section>
        </section>
        <Cart />
        <ProgressControl
          setCurrentStep={setCurrentStep}
          currentStep={currentStep}
        />
      </div>
    </main>
  );
}

export default Main;
