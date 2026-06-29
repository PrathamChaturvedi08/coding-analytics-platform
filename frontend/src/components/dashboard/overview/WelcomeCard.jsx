import SyncButton from "./SyncButton";

const WelcomeCard = ({ name, loading, onSync }) => {
  return (
    <div className="rounded-3xl bg-gradient-to-r from-cyan-600 to-blue-700 p-8 shadow-xl">
      <div className="flex items-start justify-between">
        <div className="max-w-2xl">
          <h2 className="text-4xl font-bold text-white">
            Welcome Back, {name || "Developer"} 👋
          </h2>

          <p className="mt-4 max-w-2xl text-lg leading-8 text-cyan-100">
            Sync your latest coding activity to keep your analytics, rankings,
            contest performance, and progress up to date.
          </p>
        </div>

        <SyncButton loading={loading} onClick={onSync} />
      </div>
    </div>
  );
};

export default WelcomeCard;
