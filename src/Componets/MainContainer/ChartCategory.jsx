import { Title, BarChart, Subtitle } from "@tremor/react";

export function ChartCategory({nameCategory,colorChart, chartdata}) {
  return (
    <div className="w-2/3 pl-4" >
      <Title>{nameCategory}</Title>
      <Subtitle>Cantidad de no conformidades</Subtitle>
      <BarChart
        data={chartdata}
        index="name"
        categories={["Cantidad NC"]}
        colors={["indigo"]}
      />
    </div>
  );
}
