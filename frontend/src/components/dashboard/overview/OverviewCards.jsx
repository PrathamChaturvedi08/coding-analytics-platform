import StatCard from "./StatCard";

const OverviewCards = ({ overview }) => {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      <StatCard title="Problems Solved" value={overview?.totalSolved ?? "--"} />

      <StatCard
        title="Contest Rating"
        value={overview?.contestRating ?? "--"}
      />

      <StatCard title="Global Ranking" value={overview?.ranking ?? "--"} />

      <StatCard
        title="Current Streak"
        value={overview?.currentStreak ?? "--"}
      />
    </div>
  );
};

export default OverviewCards;
