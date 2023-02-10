import React from "react";
import StepProgress from "./StepProgress";
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
        </section>
      </div>
    </main>
  );
}

export default Main;
