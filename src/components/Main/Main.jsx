import React from "react";
import StepProgress from "./StepProgress";
import StepOne from "./Steps/StepOne";
import StepTwo from "./Steps/StepTwo";
import StepThree from "./Steps/StepThree";
import ProgressControl from "./ProgressControl";
import Cart from "./Cart";
import { useState } from "react";
import { DataProvider } from "../../contexts/MainContext";
function Main() {
  const [currentStep, setCurrentStep] = useState(1);
  const [phase, setPhase] = useState("address");
  return (
    <DataProvider>
      <main className="site-main">
        <div className="main-container">
          <section
            className="register-container col col-lg-6 col-sm-12"
            data-phase={currentStep}
            data-total-price={0}
          >
            <h2 className="register-title col col-12">結帳</h2>
            <StepProgress phase={phase} />
            <section className="form-container col col-12">
              <StepOne />
              <StepTwo />
              <StepThree />
            </section>
          </section>
          <Cart />
          <ProgressControl
            phase={phase}
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
            setPhase={setPhase}
          />
        </div>
      </main>
    </DataProvider>
  );
}

export default Main;
