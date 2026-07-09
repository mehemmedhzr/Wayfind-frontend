import z from "zod";

export const roleSchema = z.object({
  userRole: z.enum(
    ["student", "provider"],
    "Zəhmət olmasa hesab növünü seçin.",
  ),
});

export type RoleSchemaType = z.infer<typeof roleSchema>;
