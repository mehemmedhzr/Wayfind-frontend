import z from "zod";

export const interestsSchema = z.object({
  interests: z.array(z.string()).min(1, "Ən azı bir maraq sahəsi əlavə edin."),
});

export type InterestsSchemaType = z.infer<typeof interestsSchema>;
