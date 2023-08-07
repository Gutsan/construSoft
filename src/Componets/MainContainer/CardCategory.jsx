import {
  Card,
  Metric,
  Text,
  Title,
  CategoryBar,
  Flex,
  Legend,
  Badge,
  Divider,
} from "@tremor/react";
import { ItemCategory } from "./ItemCategory";

export function CardCategory() {
  return (
    <Card className="bg-gray-50" decoration="top" decorationColor="gray">
      <Flex className="w-full">
        <div className="w-1/3">
          <ItemCategory
            Category="Metodo"
            Cant="118"
            Cost="520.13"
            Color="emerald"
          />
          <Divider />
          <ItemCategory
            Category="Materiales"
            Cant="21"
            Cost="314.13"
            Color="purple"
          />
          <Divider />
          <ItemCategory
            Category="Mano de Obra"
            Cant="122"
            Cost="355.85"
            Color="sky"
          />
          <Divider />
          <ItemCategory
            Category="Maquinas"
            Cant="6"
            Cost="19.88"
            Color="amber"
          />
          <Divider />
          <ItemCategory
            Category="Sub-Causa"
            Cant="0"
            Cost="0,00"
            Color="rose"
          />
        </div>
        
      </Flex>
    </Card>
  );
}
