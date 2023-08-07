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
import { ChartCategory } from "./ChartCategory";

const data = [
  { name: "Falta de supervisión", "Cantidad NC": 68 },
  { name: "Falta de Control", "Cantidad NC": 25 },
  { name: "Falta de Programación", "Cantidad NC": 0 },
  { name: "Programacion deficiente", "Cantidad NC": 0 },
  { name: "Falta de información", "Cantidad NC": 0 },
  { name: "Información incompleta o inadecuada", "Cantidad NC": 2 },
  { name: "Falta instrucción operativa", "Cantidad NC": 10 },
  { name: "Condiciones de trabajo inadecuadas", "Cantidad NC": 1 },
  { name: "Falta de evaluación o análisis del área", "Cantidad NC": 12 },
];

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
        <ChartCategory nameCategory="Metodo" colorChart="violet" chartdata={data}  />
      </Flex>
    </Card>
  );
}
