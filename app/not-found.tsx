import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="flex min-h-screen items-center justify-center px-6 pt-20 text-center">
      <div>
        <p className="text-xs uppercase tracking-[0.35em] text-gold">Error 404</p>
        <h1 className="mt-5 font-serif text-7xl md:text-9xl">Página no encontrada</h1>
        <p className="mx-auto mt-7 max-w-md leading-7 text-white/50">
          La página que buscas no existe o ha cambiado de ubicación.
        </p>
        <Link
          href="/"
          className="mt-10 inline-block border-b border-gold pb-2 text-xs uppercase tracking-[0.25em] text-gold"
        >
          Volver al inicio
        </Link>
      </div>
    </section>
  );
}
