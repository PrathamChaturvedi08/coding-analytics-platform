import StatCard from "../overview/StatCard";

const StatsGrid = ({ snapshot }) => {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h2 className="mb-6 text-2xl font-bold text-white">Current Statistics</h2>

      <div className="grid gap-5 sm:grid-cols-2">
        <StatCard
          title="Problems Solved"
          value={snapshot?.totalSolved ?? "--"}
        />

        <StatCard
          title="Contest Rating"
          value={snapshot?.contestRating ?? "--"}
        />

        <StatCard title="Global Ranking" value={snapshot?.ranking ?? "--"} />

        <StatCard
          title="Current Streak"
          value={snapshot?.currentStreak ?? "--"}
        />
      </div>
    </div>
  );
};

export default StatsGrid;
