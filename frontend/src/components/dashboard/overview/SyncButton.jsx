import { RefreshCw } from "lucide-react";

const SyncButton = ({ loading = false, onClick }) => {
  return (
    <button
      onClick={onClick}
      disabled={loading}
      className="
        flex
        items-center
        gap-2
        rounded-xl
        bg-white/10
        px-5
        py-3
        font-medium
        text-white
        backdrop-blur
        transition-all
        duration-300
        hover:bg-white/20
        disabled:opacity-50
        "
    >
      <RefreshCw size={18} className={loading ? "animate-spin" : ""} />

      {loading ? "Syncing..." : "Sync Profile"}
    </button>
  );
};

export default SyncButton;
