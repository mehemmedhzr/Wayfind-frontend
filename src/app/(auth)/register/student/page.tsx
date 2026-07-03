export default function RegisterStudentPage() {
  return (
    <div>
      <h1 className="font-heading text-2xl font-bold">Tələbə qeydiyyatı</h1>
      <p className="mt-2 text-sm text-wf-text-secondary">
        Xaricdə təhsil səyahətinizə başlayın.
      </p>
      {/* TODO: Student registration form
            Fields (PRD 7.1):
              - Ad, Soyad (required)
              - E-poçt (required)
              - Şifrə (required, min 8 chars)
              - Şifrəni təsdiqlə (required)
              - Telefon nömrəsi (optional, recommended)
            On success: redirect to /student/dashboard (onboarding begins there)
            Validation messages must be in Azerbaijani. */}
    </div>
  );
}
