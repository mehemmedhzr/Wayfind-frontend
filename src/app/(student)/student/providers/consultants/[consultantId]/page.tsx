export default async function ConsultantProfilePage({
  params,
}: {
  params: Promise<{ consultantId: string }>;
}) {
  const { consultantId } = await params;

  return (
    <div>
      <h1 className="font-heading text-2xl font-bold">Konsultant Profili</h1>
      <p className="mt-2 text-sm text-wf-text-secondary">
        Müəllim ID: {consultantId}
      </p>
      {/* TODO: Teacher profile — verified badge, certifications, packages, reviews */}
    </div>
  );
}
