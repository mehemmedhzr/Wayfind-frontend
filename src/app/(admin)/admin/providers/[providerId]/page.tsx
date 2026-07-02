export default async function AdminProviderDetailPage({
  params,
}: {
  params: Promise<{ providerId: string }>;
}) {
  const { providerId } = await params;

  return (
    <div>
      <h1 className="font-heading text-2xl font-bold">Provayder detali</h1>
      <p className="mt-2 text-sm text-wf-text-secondary">
        Provayder ID: {providerId}
      </p>
      {/* TODO: Admin provider detail, credentials, packages, and verification state */}
    </div>
  );
}
