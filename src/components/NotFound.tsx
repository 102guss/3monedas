const NotFound = () => {
  return (
    <section className="min-h-[60vh] flex items-center justify-center px-6">
      <div className="text-center space-y-4 rounded-2xl bg-slate-50 border border-slate-200 px-8 py-10 shadow-sm">
        <p className="text-sm text-slate-500">Bloque perdido en la cadena</p>
        <h1 className="text-5xl font-extrabold text-slate-900">404</h1>
        <p className="text-lg font-medium text-blue-900">Esta ruta se fue to the moon.</p>
        <p className="text-slate-700">
          Respira, HODL y vuelve al inicio para encontrar tu wallet.
        </p>
      </div>
    </section>
  );
};

export default NotFound;