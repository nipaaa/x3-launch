import React from "react";

const Stepper = () => {
  return (
    <div>
      <div direction="vertical" height="800px" class="stepper" id="stepper">
        <div class="steps-container">
          <div class="steps">
            <div class="step" icon="fa fa-pencil-alt" id="1">
              <div class="step-title">
                <span class="step-number">01</span>
                <div class="step-text">Basic Information</div>
              </div>
            </div>
            <div class="step" icon="fa fa-info-circle" id="2">
              <div class="step-title">
                <span class="step-number">02</span>
                <div class="step-text">Personal Data</div>
              </div>
            </div>
            <div class="step" icon="fa fa-book-reader" id="3">
              <div class="step-title">
                <span class="step-number">03</span>
                <div class="step-text">Terms and Conditions</div>
              </div>
            </div>
            <div class="step" icon="fa fa-check" id="4">
              <div class="step-title">
                <span class="step-number">04</span>
                <div class="step-text">Finish</div>
              </div>
            </div>
            <div class="step" icon="fa fa-pencil-alt" id="5">
              <div class="step-title">
                <span class="step-number">05</span>
                <div class="step-text">More</div>
              </div>
            </div>
          </div>
        </div>
        <div class="stepper-content-container">
          <div class="stepper-content fade-in" stepper-label="1">
            <div>Step 1</div>
          </div>
          <div class="stepper-content fade-in" stepper-label="2">
            <div>Step 2</div>
          </div>
          <div class="stepper-content fade-in" stepper-label="3">
            <div>Step 3</div>
          </div>
          <div class="stepper-content fade-in" stepper-label="4">
            <div>Step 4</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stepper;
