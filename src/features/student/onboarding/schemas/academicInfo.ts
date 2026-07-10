import z from "zod";

export const CERTIFICATE_TYPES = [
  "ielts",
  "toefl",
  "gre_gmat",
  "goethe",
  "osd",
] as const;

export type CertificateType = (typeof CERTIFICATE_TYPES)[number];

export const CERTIFICATE_TYPE_LABELS: Record<CertificateType, string> = {
  ielts: "IELTS",
  toefl: "TOEFL",
  gre_gmat: "GRE / GMAT",
  goethe: "Goethe",
  osd: "ÖSD",
};

export const academicInfoSchema = z.object({
  currentEducationLevel: z.string().min(1, "Hazırkı təhsil səviyyənizi seçin."),
  fieldOfStudy: z.string().min(2, "İxtisas sahənizi daxil edin."),
  gpa: z.preprocess(
    (value) => (value === "" ? undefined : value),
    z.coerce
      .number()
      .min(0, "GPA 0-dan böyük olmalıdır.")
      .max(4, "GPA 4-dən çox ola bilməz.")
      .optional(),
  ),
  certificateType: z.preprocess(
    (value) => (value === "" ? undefined : value),
    z.enum(CERTIFICATE_TYPES).optional(),
  ),
  certificateScore: z.preprocess(
    (value) => (value === "" ? undefined : value),
    z.coerce.number().min(0, "Bal 0-dan böyük olmalıdır.").optional(),
  ),
});

export type AcademicInfoSchemaType = z.infer<typeof academicInfoSchema>;
export type AcademicInfoFormInput = z.input<typeof academicInfoSchema>;
