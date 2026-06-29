const StatCard = ({ title, value }) => {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:border-cyan-500/40">
      <p className="text-sm font-medium text-slate-400">{title}</p>

      <h2 className="mt-4 text-4xl font-bold text-white">{value}</h2>
    </div>
  );
};

export default StatCard;
