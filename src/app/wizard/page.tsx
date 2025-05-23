"use client";

import React from "react";
import ReusableForm from "@/app/components/ReusbleForm"; // your existing form
import { useWizardFormStore } from "@/app/store/wizardStore";
import { wizardSteps } from "@/app/form/wizard"; // array of { fields, schema }

const WizardForm = () => {
  const { step, nextStep, prevStep, data, updateData, reset } =
    useWizardFormStore();

  const currentStep = wizardSteps[step];
  const isLastStep = step === wizardSteps.length - 1;

  const handleStepSubmit = (stepData: any) => {
    updateData(stepData);

    if (isLastStep) {
      const fullData = { ...data, ...stepData };
      console.log("All Steps Complete. Final Data:", fullData);

      // Optionally reset form state
      reset();

      // Optionally show success UI or navigate
      alert("Form submitted successfully! Check the console.");
    } else {
      nextStep();
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">
        Step {step + 1} of {wizardSteps.length}
      </h2>

      <ReusableForm
        key={step} // re-render form when step changes
        fields={currentStep.fields}
        schema={currentStep.schema}
        onSubmit={handleStepSubmit}
      />

      {step > 0 && (
        <button
          onClick={prevStep}
          className="mt-4 px-4 py-2 bg-gray-300 rounded text-black"
        >
          Previous
        </button>
      )}
    </div>
  );
};

export default WizardForm;
