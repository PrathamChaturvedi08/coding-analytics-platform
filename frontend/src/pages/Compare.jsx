import { useEffect, useState } from "react";

import useSnapshots from "../hooks/useSnapshots";
import useCompare from "../hooks/useCompare";

const Compare = () => {
  const { data: snapshotData } = useSnapshots();

  const snapshots = snapshotData?.snapshots ?? [];

  const [from, setFrom] = useState("");

  const [to, setTo] = useState("current");

  useEffect(() => {
    if (snapshots.length > 0 && !from) {
      setFrom(snapshots[0]._id);
    }
  }, [snapshots, from]);

  const { data: compareData } = useCompare(from, to);

  const comparison = compareData?.comparison;

  const improvingTopics = compareData?.improvingTopics ?? [];

  return (
    <div className="space-y-8">
      {/* Header */}

      <div>
        <h1 className="text-4xl font-bold text-white">Compare Progress</h1>

        <p className="mt-2 text-slate-400">
          Compare your current progress with previous snapshots.
        </p>
      </div>

      {/* Dropdowns */}

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm text-slate-400">
            From Snapshot
          </label>

          <select
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className="w-full rounded-xl border border-slate-700 bg-slate-900 p-3 text-white"
          >
            {snapshots.map((snapshot) => (
              <option key={snapshot._id} value={snapshot._id}>
                {new Date(snapshot.startDate).toLocaleDateString()} →{" "}
                {new Date(snapshot.endDate).toLocaleDateString()}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm text-slate-400">
            Compare With
          </label>

          <select
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="w-full rounded-xl border border-slate-700 bg-slate-900 p-3 text-white"
          >
            <option value="current">Current</option>

            {snapshots.map((snapshot) => (
              <option key={snapshot._id} value={snapshot._id}>
                {new Date(snapshot.startDate).toLocaleDateString()} →{" "}
                {new Date(snapshot.endDate).toLocaleDateString()}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Growth Summary */}

      {comparison && (
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="mb-6 text-2xl font-bold text-white">Growth Summary</h2>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <Metric title="Problems Solved" data={comparison.totalSolved} />

            <Metric title="Contest Rating" data={comparison.contestRating} />

            <Metric title="Easy" data={comparison.easySolved} />

            <Metric title="Medium" data={comparison.mediumSolved} />
          </div>
        </div>
      )}

      {/* Improving Topics */}

      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
        <h2 className="mb-6 text-2xl font-bold text-white">
          Most Improved Topics
        </h2>

        <div className="space-y-4">
          {improvingTopics.map((topic) => (
            <div
              key={topic.tagSlug}
              className="flex items-center justify-between rounded-xl bg-slate-950 p-4"
            >
              <span className="text-white">{topic.tagName}</span>

              <span className="font-semibold text-green-400">
                +{topic.change}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Metric = ({ title, data }) => (
  <div className="rounded-xl bg-slate-950 p-5">
    <p className="text-sm text-slate-400">{title}</p>

    <h3 className="mt-2 text-3xl font-bold text-white">{data?.to ?? "--"}</h3>

    <p
      className={`mt-2 ${
        data?.change >= 0 ? "text-green-400" : "text-red-400"
      }`}
    >
      {data?.change > 0 ? "+" : ""}
      {data?.change}
    </p>
  </div>
);

export default Compare;
