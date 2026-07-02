export default async function TeacherProfilePage({
  params,
}: {
  params: Promise<{ teacherId: string }>;
}) {
  const { teacherId } = await params;

  return (
    <div>
      <h1 className="font-heading text-2xl font-bold">Müəllim Profili</h1>
      <p className="mt-2 text-sm text-wf-text-secondary">
        Müəllim ID: {teacherId}
      </p>
      {/* TODO: Teacher profile — verified badge, certifications, packages, reviews */}
    </div>
  );
}
