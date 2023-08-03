import {
  Card,
  Metric,
  Text,
  CategoryBar,
  Flex,
  Legend,
} from "@tremor/react";

export function CardTratamiento({ treatment, qty, kpi }) {
  return (
    <>
      <Card className="w-96 min-w-min bg-sky-50" decoration="top" decorationColor="sky">
        {" "}
        <Flex>
          <div>
            <Text>Reparación</Text>
            <Metric>231</Metric>
          </div>
          <div>
            <Text>Eliminación</Text>
            <Metric>2</Metric>
          </div>
          <div>
            <Text>Autorización</Text>
            <Metric>25</Metric>
          </div>
        </Flex>
        <CategoryBar
          values={[231, 2, 25]}
          colors={["lime", "red", "cyan"]}
          className="mt-3"
        />
        <Legend
          className="mt-3"
          categories={["Reparación", "Eliminación","Autorización"]}
          colors={["lime", "red", "cyan"]}
        />
      </Card>
    </>
  );
}
