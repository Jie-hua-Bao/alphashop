import React from "react";
import { ReactComponent as SvgPgCompleteIcon } from "../../imagefiles/icons/pg-complete.svg";

function Register({ children, dataphase, step, title }) {
  return (
    <span className="progress-group" data-phase={dataphase}>
      <span className="progress-icon">
        <span className="text">{step}</span>
        <SvgPgCompleteIcon className="icon cursor-point" />
      </span>
      <span className="progress-label">{title}</span>
    </span>
  );
}

function StepProgress() {
  return (
    <>
      {/* <!-- register-progress --> */}
      <section className="progress-container col col-12">
        <Register dataphase="address" step="1" title="寄送地址" />
        {/* <span className="progress-group" data-phase="address">
          <span className="progress-icon">
            <span className="text">1</span>
            <svg className="icon cursor-point">
              <SvgPgCompleteIcon />
            </svg>
          </span>
          <span className="progress-label">寄送地址</span>
        </span> */}
        <span className="progress-bar" data-order="1"></span>
        <Register dataphase="shipping" step="2" title="運送方式" />
        {/* <span className="progress-group" data-phase="shipping">
          <span className="progress-icon">
            <span className="text">2</span>
            <svg className="icon cursor-point">
              <SvgPgCompleteIcon />
            </svg>
          </span>
          <span className="progress-label">運送方式</span>
        </span> */}
        <span className="progress-bar" data-order="2"></span>
        <Register dataphase="credit-card" step="3" title="付款資訊" />
        {/* <span className="progress-group" data-phase="credit-card">
          <span className="progress-icon">
            <span className="text">3</span>
            <svg className="icon cursor-point">
              <SvgPgCompleteIcon />
            </svg>
          </span>
          <span className="progress-label">付款資訊</span>
        </span> */}
      </section>
    </>
  );
}

export default StepProgress;