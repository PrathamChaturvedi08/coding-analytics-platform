import WelcomeCard from "../components/dashboard/overview/WelcomeCard";
import OverviewCards from "../components/dashboard/overview/OverviewCards";

import useProfile from "../hooks/useProfile";
import useAnalytics from "../hooks/useAnalytics";
import useSync from "../hooks/useSync";

const Dashboard = () => {
  const { data: profileData } = useProfile();

  const { data: analyticsData } = useAnalytics();

  const syncMutation = useSync();

  const profile = profileData?.user;

  const overview = analyticsData?.overview;

  return (
    <div className="space-y-8">
      <WelcomeCard
        name={profile?.name}
        loading={syncMutation.isPending}
        onSync={() => syncMutation.mutate()}
      />

      <OverviewCards overview={overview} />
    </div>
  );
};

export default Dashboard;
