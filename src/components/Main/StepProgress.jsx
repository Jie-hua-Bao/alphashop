import React from "react";
import { ReactComponent as SvgPgCompleteIcon } from "../../imagefiles/icons/pg-complete.svg";

function Register({ phase, currentStep, title }) {
  return (
    <>
      <span className="progress-group" data-phase={phase}>
        <span className="progress-icon">
          <span className="text">{currentStep}</span>
          <SvgPgCompleteIcon className="icon cursor-point" />
        </span>
        <span className="progress-label">{title}</span>
      </span>
      {currentStep !== 3 && (
        <span className="progress-bar" data-order={currentStep}></span>
      )}
    </>
  );
}

function StepProgress() {
  return (
    <>
      {/* <!-- register-progress --> */}
      <section className="progress-container col col-12">
        <Register phase="address" currentStep={1} title="寄送地址" />
        <Register phase="shipping" currentStep={2} title="運送方式" />
        <Register phase="credit-card" currentStep={3} title="付款資訊" />
      </section>
    </>
  );
}

export default StepProgress;
