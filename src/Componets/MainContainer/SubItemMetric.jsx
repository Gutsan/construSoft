import { Title,Text,BadgeDelta,Flex } from "@tremor/react";

export function SubItemMetric({ titleMetric, numMetric,badgeMetric }) {
  return (
    <div className="flex flex-col items-center">
      <Text>{titleMetric}</Text>
      <Flex>
      <Title>{numMetric}</Title>
      <BadgeDelta deltaType={badgeMetric} />
      </Flex>
    </div>
  );
}

