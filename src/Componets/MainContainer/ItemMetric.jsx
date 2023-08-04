import { Metric,Text } from "@tremor/react";

export function ItemMetric({ titleMetric, numMetric }) {
  return (
    <div className="flex flex-col items-center">
      <Text>{titleMetric}</Text>
      <Metric>{numMetric}</Metric>
    </div>
  );
}
