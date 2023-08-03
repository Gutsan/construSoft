import {
  Card,
  Metric,
  Flex,
  Text,
  ProgressBar,
  CategoryBar,
  Legend,
} from "@tremor/react";

export function CardCantNc() {
  return (
    <>
      <Card className="w-80 bg-teal-50" decoration="top" decorationColor="gray">
        <Text>Total NC</Text>
        <Flex>
          <Metric>273</Metric>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5m-2.1-19.5l-3.9 19.5"
            />
          </svg>
        </Flex>
        <Flex>
          <Text>261 Cerradas (96%) </Text>
          <Legend
            className="mt-3"
            categories={["Cerradas"]}
            colors={["teal"]}
          />
        </Flex>
        <ProgressBar value={94} color="teal" className="mt-3" />
      </Card>
    </>
  );
}
