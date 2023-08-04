import {
  Card,
  Flex,
  CategoryBar,
  Legend,
} from "@tremor/react";

import { ItemMetric } from "./ItemMetric";
import { SubItemMetric } from "./SubItemMetric";

export function CardCosto() {
  return (
    <Card className="bg-red-50" decoration="top" decorationColor="red">
      <Flex>
        <ItemMetric titleMetric="Costo(UF)" numMetric="478,97" />
				<div>
        <SubItemMetric titleMetric="Recuperable" numMetric="370,63" badgeMetric="moderateIncrease" />
				<SubItemMetric titleMetric="No Recuperable" numMetric="108,34" badgeMetric="moderateDecrease" />
				</div>
      </Flex>
    </Card>
  );
}
