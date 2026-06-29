const ProfileCard = ({ user, snapshot }) => {
  const avatar = `https://ui-avatars.com/api/?name=${encodeURIComponent(
    user?.name || "Developer",
  )}&background=0891b2&color=ffffff&size=128`;

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
      <div className="flex flex-col gap-8 md:flex-row md:items-center">
        {/* Avatar */}

        <img
          src={avatar}
          alt={user?.name}
          className="h-28 w-28 rounded-full border-4 border-cyan-500 object-cover"
        />

        {/* Info */}

        <div className="flex-1">
          <h2 className="text-3xl font-bold text-white">{user?.name}</h2>

          <p className="mt-2 text-slate-400">{user?.email}</p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div>
              <p className="text-sm text-slate-500">Joined</p>

              <p className="mt-1 font-medium text-white">
                {new Date(user?.createdAt).toLocaleDateString()}
              </p>
            </div>

            <div>
              <p className="text-sm text-slate-500">Last Synced</p>

              <p className="mt-1 font-medium text-white">
                {snapshot?.syncedAt
                  ? new Date(snapshot.syncedAt).toLocaleString()
                  : "Never"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
