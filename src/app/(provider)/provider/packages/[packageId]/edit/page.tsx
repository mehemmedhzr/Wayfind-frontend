export default async function EditPackagePage({
  params,
}: {
  params: Promise<{ packageId: string }>;
}) {
  const { packageId } = await params;

  return (
    <div>
      <h1 className="font-heading text-2xl font-bold">Paketi redakte et</h1>
      <p className="mt-2 text-sm text-wf-text-secondary">
        Paket ID: {packageId}
      </p>
      {/* TODO: Provider package edit form */}
    </div>
  );
}
