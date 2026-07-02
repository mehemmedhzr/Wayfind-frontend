export default async function BookingPage({
  params,
}: {
  params: Promise<{ bookingId: string }>;
}) {
  const { bookingId } = await params;

  return (
    <div>
      <h1 className="font-heading text-2xl font-bold">Bron Səhifəsi</h1>
      <p className="mt-2 text-sm text-wf-text-secondary">
        Müəllim ID: {bookingId}
      </p>
      {/* TODO: Teacher profile — verified badge, certifications, packages, reviews */}
    </div>
  );
}
