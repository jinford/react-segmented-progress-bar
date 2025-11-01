import { SegmentedProgressBar } from "./components/shared/segmented-progress-bar";

function App() {
  return (
    <div className="w-full h-screen flex items-center justify-center p-8">
      <div className="space-y-8 w-full max-w-36">
        <div>
          <SegmentedProgressBar
            segments={[
              {
                label: "配信成功",
                value: 50,
                color: "bg-green-500",
              },
              {
                label: "配信失敗",
                value: 10,
                color: "bg-red-500",
              },
              {
                label: "配信対象外",
                value: 1,
                color: "bg-amber-500",
              },
              {
                label: "配信結果待ち",
                value: 5,
                color: "bg-gray-400",
              },
            ]}
            unit="件"
            className="w-full"
          />
        </div>
        <div>
          <SegmentedProgressBar
            segments={[
              {
                label: "配信成功",
                value: 2,
                color: "bg-green-500",
              },
              {
                label: "配信失敗",
                value: 0,
                color: "bg-red-500",
              },
              {
                label: "配信対象外",
                value: 0,
                color: "bg-amber-500",
              },
              {
                label: "配信結果待ち",
                value: 0,
                color: "bg-gray-400",
              },
            ]}
            unit="件"
            className="w-full"
          />
        </div>
        <div>
          <SegmentedProgressBar
            segments={[
              {
                label: "配信成功",
                value: 1,
                color: "bg-green-500",
              },
              {
                label: "配信失敗",
                value: 1,
                color: "bg-red-500",
              },
              {
                label: "配信対象外",
                value: 1,
                color: "bg-amber-500",
              },
              {
                label: "配信結果待ち",
                value: 0,
                color: "bg-gray-400",
              },
            ]}
            unit="件"
            className="w-full"
          />
        </div>
        <div>
          <SegmentedProgressBar
            segments={[
              {
                label: "配信成功",
                value: 0,
                color: "bg-green-500",
              },
              {
                label: "配信失敗",
                value: 0,
                color: "bg-red-500",
              },
              {
                label: "配信対象外",
                value: 0,
                color: "bg-amber-500",
              },
              {
                label: "配信結果待ち",
                value: 1,
                color: "bg-gray-400",
              },
            ]}
            unit="件"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
