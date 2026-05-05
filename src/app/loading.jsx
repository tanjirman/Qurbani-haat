export default function loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <div className="relative flex items-center justify-center">
        <div className="w-20 h-20 border-4 border-slate-100 rounded-full"></div>
        <div className="absolute w-20 h-20 border-4 border-t-green-600 rounded-full animate-spin"></div>
        <span className="absolute text-2xl">🐄</span>
      </div>
      <h2 className="mt-6 text-xl font-black text-slate-900 tracking-tight">
        Qurbani<span className="text-green-600">Hat</span>
      </h2>
    </div>
  );
}