// wizardFields.ts
import { z } from "zod";
import { FormField } from "@/app/components/form";

export const wizardSteps: {
  fields: FormField[];
  schema: z.ZodObject<any>;
}[] = [
  {
    fields: [
      { name: "name", label: "Name", type: "text", required: true },
      { name: "email", label: "Email", type: "email", required: true },
    ],
    schema: z.object({
      name: z.string().min(1, "Name is required"),
      email: z.string().email("Invalid email"),
    }),
  },
  {
    fields: [
      { name: "age", label: "Age", type: "number", required: true },
      { name: "country", label: "Country", type: "text", required: true },
    ],
    schema: z.object({
      age: z.number().min(18, "Must be at least 18"),
      country: z.string().min(2, "Required"),
    }),
  },
  {
    fields: [
      { name: "feedback", label: "Feedback", type: "textarea", required: true },
    ],
    schema: z.object({
      feedback: z.string().min(10, "Please provide detailed feedback"),
    }),
  },
];
