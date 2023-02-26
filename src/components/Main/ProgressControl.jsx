import React from "react";
import { ReactComponent as SvgRightArrow } from "../../imagefiles/icons/right-arrow.svg";
import { ReactComponent as SvgLeftArrow } from "../../imagefiles/icons/left-arrow.svg";

function PrevBtn({ onClick }) {
  return (
    <button class="prev" onClick={onClick}>
      <SvgLeftArrow className="cursor-point btn-action" />
      上一步
    </button>
  );
}
function NextBtn({ onClick }) {
  return (
    <button class="next" onClick={onClick}>
      下一步
      <SvgRightArrow className="cursor-point btn-action" />
    </button>
  );
}

function ProgressControl({ currentStep, phase, setPhase, setCurrentStep }) {
  const handleBtnClick = (e) => {
    const btnPhase = e.target.parentElement.dataset.phase;

    // 下一頁按紐設定
    if (e.target.className === "next" && e.target.closest("button")) {
      if (btnPhase === "address") {
        setPhase("shipping");
      }
      if (btnPhase === "shipping") {
        setPhase("credit-card");
      }
      setCurrentStep((step) => step + 1);
    }
    // 上一頁按鈕設定

    if (e.target.className === "prev" && e.target.closest("button")) {
      if (btnPhase === "shipping") {
        setPhase("address");
      }
      if (btnPhase === "credit-card") {
        setPhase("shipping");
      }
      setCurrentStep((step) => step - 1);
    }
  };
  return (
    <section className="progress-control-container col col-lg-6 col-sm-12">
      <section className="button-group col col-12" data-phase={phase}>
        {/* 初始狀態為 address 則不顯示 "上一頁" */}
        {phase !== "address" && <PrevBtn onClick={handleBtnClick} />}
        {/* 初始狀態為 crdit-card 則顯示"確認下單"，反之，顯示下一頁*/}
        {phase !== "credit-card" ? (
          <NextBtn onClick={handleBtnClick} />
        ) : (
          <button className="next">確認下單</button>
        )}
      </section>
    </section>
  );
}

export default ProgressControl;
