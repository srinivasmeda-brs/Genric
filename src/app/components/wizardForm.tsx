'use client'
import {FormField} from  '@/app/components/form'
import { z } from 'zod';
import ReusableForm from './ReusbleForm';


interface WizardFormProps  {
    steps: {fields:FormField[], schema:z.ZodObject<any>}[];
    onFinalSubmit:(data:any) => void;
}

import React from 'react';

const WizardForm: React.FC<WizardFormProps> = ({ steps, onFinalSubmit }) => {
  const [currentStep, setCurrentStep] = React.useState(0);
  const [formData, setFormData] = React.useState<any>({});

  const isLastStep = currentStep === steps.length - 1;
  const { fields, schema } = steps[currentStep];

  const handleStepSubmit = (data: any) => {
    const updatedData = { ...formData, ...data };
    if (isLastStep) {
      onFinalSubmit(updatedData);
    } else {
      setFormData(updatedData);
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  return (
    <div>
      <ReusableForm
        key={currentStep} // Important: to reset form per step
        fields={fields}
        schema={schema}
        onSubmit={handleStepSubmit}
      />
      <div className="flex justify-between mt-4">
        {currentStep > 0 && (
          <button
            onClick={handleBack}
            className="px-4 py-2 bg-gray-400 text-white rounded"
          >
            Back
          </button>
        )}
        {!isLastStep && (
          <button
            onClick={() =>
              document
                .querySelector("form")
                ?.dispatchEvent(
                  new Event("submit", { cancelable: true, bubbles: true })
                )
            }
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default WizardForm;