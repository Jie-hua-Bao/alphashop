import React from "react";
import { ReactComponent as SvgRightArrow } from "../../imagefiles/icons/right-arrow.svg";
import { ReactComponent as SvgLeftArrow } from "../../imagefiles/icons/left-arrow.svg";

function ProgressControl({ currentStep, setCurrentStep }) {
  /*如果按上一頁，則更新狀態為當前狀態-1*/
  function handlePrev() {
    setCurrentStep(() => {
      return currentStep - 1;
    });
  }
  /*如果按下一頁，則更新狀態為當前狀態+1*/
  function handleNext() {
    setCurrentStep(() => {
      return currentStep + 1;
    });
  }

  return (
    <section className="progress-control-container col col-lg-6 col-sm-12">
      <section className="button-group col col-12" data-phase="address">
        {currentStep !== 1 && ( //如果不是 1 就給 "上一步"
          <button className="prev" onClick={handlePrev}>
            <SvgLeftArrow className="cursor-point" />
            上一步
          </button>
        )}
        <button
          className="next"
          onClick={currentStep === 3 ? currentStep : handleNext}
        >
          {currentStep === 3 ? "確認下單" : "下一步"}
          <SvgRightArrow className="cursor-point" />
        </button>
      </section>
    </section>
  );
}

export default ProgressControl;
