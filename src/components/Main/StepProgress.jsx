import React from "react";
import { ReactComponent as SvgPgCompleteIcon } from "../../imagefiles/icons/pg-complete.svg";

function Register({ currentStep, step, title }) {
  return (
    <>
      <span className="progress-group" data-phase={currentStep}>
        <span className="progress-icon">
          <span className="text">{step}</span>
          <SvgPgCompleteIcon className="icon cursor-point" />
        </span>
        <span className="progress-label">{title}</span>
      </span>
      {step !== 3 && <span className="progress-bar" data-order={step}></span>}
    </>
  );
}

function StepProgress({ currentStep }) {
  


  
  return (
    <>
      {/* <!-- register-progress --> */}
      <section className="progress-container col col-12">
        <Register currentStep="address" step={1} title="寄送地址" />
        <Register currentStep="shipping" step={2} title="運送方式" />
        <Register currentStep="credit-card" step={3} title="付款資訊" />
      </section>
    </>
  );
}

export default StepProgress;
