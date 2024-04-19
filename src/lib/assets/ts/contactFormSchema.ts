import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email(),
  subject: z.string().min(1, { message: "Subject is required" }),
  message: z.string().max(500),
});

export type ContactFormSchema = typeof contactFormSchema;
