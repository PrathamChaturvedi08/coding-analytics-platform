const PlatformCard = ({ user, snapshot }) => {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h2 className="mb-6 text-2xl font-bold text-white">
        Connected Platforms
      </h2>

      <div className="rounded-xl border border-slate-800 bg-slate-950 p-5">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-white">LeetCode</h3>

            <p className="mt-2 text-slate-400">
              {user?.leetcodeUsername || "Not Connected"}
            </p>
          </div>

          <span
            className={`rounded-full px-3 py-1 text-sm font-medium ${
              user?.leetcodeUsername
                ? "bg-green-500/20 text-green-400"
                : "bg-red-500/20 text-red-400"
            }`}
          >
            {user?.leetcodeUsername ? "Connected" : "Disconnected"}
          </span>
        </div>

        <div className="mt-6 border-t border-slate-800 pt-4">
          <p className="text-sm text-slate-500">Last Sync</p>

          <p className="mt-1 text-white">
            {snapshot?.syncedAt
              ? new Date(snapshot.syncedAt).toLocaleString()
              : "Never"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlatformCard;
