export default async function ProviderBookingPage({
  params,
}: {
  params: Promise<{ bookingId: string }>;
}) {
  const { bookingId } = await params;

  return (
    <div>
      <h1 className="font-heading text-2xl font-bold">Provayder bronu</h1>
      <p className="mt-2 text-sm text-wf-text-secondary">
        Bron ID: {bookingId}
      </p>
      {/* TODO: Provider booking detail, escrow status, and booking messages */}
    </div>
  );
}
