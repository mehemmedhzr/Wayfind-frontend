import z from "zod";

export const goalsSchema = z.object({
  targetCountries: z.array(z.string()).min(1, "Ən azı bir hədəf ölkə seçin."),
  degreeTarget: z.enum(
    ["bachelor", "master", "phd"],
    "Dərəcə səviyyəsini seçin.",
  ),
  intakeYear: z.coerce.number("Qəbul ilini seçin."),
  budget: z.coerce.number().min(1, "İllik büdcəni daxil edin."),
});

export type GoalsSchemaType = z.infer<typeof goalsSchema>;
export type GoalsFormInput = z.input<typeof goalsSchema>;
