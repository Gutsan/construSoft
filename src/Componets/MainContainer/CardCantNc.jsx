import { Card, Metric, Text, CategoryBar, Legend } from "@tremor/react";

export function CardCantNc() {
  return (
    <>
      <Card
        className=""
        decoration="top"
        decorationColor="gray"
      >
        <Text>Total Nc</Text>
        <Metric>270</Metric>
        <CategoryBar
          className="mt-4"
          values={[254, 16]}
          colors={["emerald", "red"]}
        />
        <Legend
          className="mt-3"
          categories={["Abiertas", "Cerradas"]}
          colors={["emerald", "red"]}
        />
      </Card>
    </>
  );
}
