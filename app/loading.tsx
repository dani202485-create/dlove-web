export default function Loading() {
  return (
    <div className="grid min-h-screen place-items-center bg-ink" role="status">
      <div className="text-center">
        <div className="mx-auto h-10 w-10 animate-spin rounded-full border border-white/20 border-t-gold" />
        <p className="mt-5 text-[10px] uppercase tracking-[0.3em] text-white/45">
          Cargando D`LOVE
        </p>
      </div>
    </div>
  );
}
