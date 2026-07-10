import z from "zod";

export const personalInfoSchema = z.object({
  fullName: z.string().min(2, "Ad və soyadınızı daxil edin."),
  email: z.string().email("Düzgün e-poçt ünvanı daxil edin."),
  phone: z.string().optional(),
});

export type PersonalInfoSchemaType = z.infer<typeof personalInfoSchema>;
