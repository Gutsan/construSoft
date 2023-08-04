import { Card, Metric, Text, CategoryBar, Flex, Legend } from "@tremor/react";
import { ItemMetric } from "./ItemMetric";

export function CardTratamiento({ treatment, qty, kpi }) {
  return (
    <>
      <Card
        className="min-w-min bg-sky-50"
        decoration="top"
        decorationColor="sky"
      >
        <Flex>
          <ItemMetric titleMetric="Reparación" numMetric="231" />
          <ItemMetric titleMetric="Eliminación" numMetric="2" />
          <ItemMetric titleMetric="Autorización" numMetric="25" />
        </Flex>
        <CategoryBar
          values={[231, 2, 25]}
          colors={["lime", "red", "cyan"]}
          className="mt-3"
        />
        <Legend
          className="mt-3"
          categories={["Reparación", "Eliminación", "Autorización"]}
          colors={["lime", "red", "cyan"]}
        />
      </Card>
    </>
  );
}
