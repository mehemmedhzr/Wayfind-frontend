export default function RegisterProviderPage() {
  return (
    <div>
      <h1 className="font-heading text-2xl font-bold">Provayder qeydiyyatı</h1>
      <p className="mt-2 text-sm text-wf-text-secondary">
        Tələbələrə xidmət göstərməyə başlayın.
      </p>
      {/* TODO: Provider registration form
            Step 1 — Provider subtype selection (PRD 7.1):
              - "Sertifikat Müəllimi" (teacher) — IELTS, TOEFL, GRE/GMAT, Goethe, ÖSD
              - "Konsultant" (consultant) — Verified graduate or Professional consultant
            Step 2 — Account details:
              - Ad, Soyad (required)
              - E-poçt (required)
              - Şifrə (required, min 8 chars)
              - Şifrəni təsdiqlə (required)
              - Telefon nömrəsi (optional, recommended)
            On success: redirect to /provider/verification (credential upload begins there)
            Subtype must be stored — it determines verification requirements.
            Validation messages must be in Azerbaijani. */}
    </div>
  );
}
