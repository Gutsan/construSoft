import { Card, Metric, Text, Badge,Flex } from "@tremor/react";

export function CardTratamiento({treatment, qty,kpi}) {
  return (
    <>
      <Card
        className=""
        decoration="top"
        decorationColor="sky"
      >
        <Flex>
          <div>
            <Text>{treatment}</Text>
            <Metric>{qty}</Metric>
            </div>
            <Badge>{kpi}</Badge>
        </Flex>
      </Card>
    </>
  );
}
