export default function RegisterPage() {
  return (
    <div>
      <h1 className="font-heading text-2xl font-bold">Qeydiyyat</h1>
      <p className="mt-2 text-sm text-wf-text-secondary">
        Hesab növünü seçin.
      </p>
      {/* TODO: Role selection step — two cards:
            1. "Tələbə kimi qeydiyyat" → navigates to /register/student
            2. "Provayder kimi qeydiyyat" → navigates to /register/provider
          Already authenticated users should be redirected to their dashboard. */}
    </div>
  );
}
