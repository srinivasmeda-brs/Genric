import { create } from "zustand";

type WizardStore = {
  step: number;
  data: Record<string, any>;
  setStep: (step: number) => void;
  nextStep: () => void;
  prevStep: () => void;
  updateData: (values: Record<string, any>) => void;
  reset: () => void;
};

export const useWizardFormStore = create<WizardStore>((set) => ({
  step: 0,
  data: {},
  setStep: (step) => set({ step }),
  nextStep: () => set((state) => ({ step: state.step + 1 })),
  prevStep: () => set((state) => ({ step: state.step - 1 })),
  updateData: (values) =>
    set((state) => ({ data: { ...state.data, ...values } })),
  reset: () => set({ step: 0, data: {} }),
}));
