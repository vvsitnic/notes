export default async function NotePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // TODO: MB FIX STICKY HEADBAR THAT MAKES CONTAINER OVERFLOX Y AXIS!!
  return (
    <div className="h-screen w-full overflow-auto">
      <div
        className="max-w-6xl mx-auto mt-4 mb-10 p-5 outline-0"
        contentEditable
        suppressContentEditableWarning
      >
        Edit this text!
      </div>
    </div>
  );
}
