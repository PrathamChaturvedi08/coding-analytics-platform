import useProfile from "../hooks/useProfile";
import useSync from "../hooks/useSync";
import useAuth from "../hooks/useAuth";

import Loader from "../components/ui/Loader";

import ProfileCard from "../components/dashboard/common/ProfileCard";
import PlatformCard from "../components/dashboard/common/PlatformCard";
import StatsGrid from "../components/dashboard/common/StatsGrid";

const Profile = () => {
  const { data, isLoading } = useProfile();

  const syncMutation = useSync();

  const { logout } = useAuth();

  if (isLoading) {
    return (
      <div className="flex h-[70vh] items-center justify-center">
        <Loader />
      </div>
    );
  }

  const user = data?.user;
  const snapshot = data?.currentSnapshot;

  return (
    <div className="space-y-8">
      {/* Header */}

      <div>
        <h1 className="text-4xl font-bold text-white">Profile</h1>

        <p className="mt-2 text-slate-400">
          Manage your coding profile and connected platforms.
        </p>
      </div>

      {/* User */}

      <ProfileCard user={user} snapshot={snapshot} />

      {/* Platform + Stats */}

      <div className="grid gap-8 xl:grid-cols-2">
        <PlatformCard user={user} snapshot={snapshot} />

        <StatsGrid snapshot={snapshot} />
      </div>

      {/* Account */}

      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
        <h2 className="mb-6 text-2xl font-bold text-white">Account Actions</h2>

        <div className="flex gap-4">
          <button
            onClick={() => syncMutation.mutate()}
            disabled={syncMutation.isPending}
            className="rounded-xl bg-cyan-500 px-6 py-3 font-medium text-white transition hover:bg-cyan-400 disabled:opacity-50"
          >
            {syncMutation.isPending ? "Syncing..." : "Sync Profile"}
          </button>

          <button
            onClick={logout}
            className="rounded-xl border border-red-500 px-6 py-3 font-medium text-red-400 transition hover:bg-red-500 hover:text-white"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
