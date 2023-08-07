import { Bold, Text, Flex, Badge } from "@tremor/react";

export function ItemCategory({ Category, Cant, Cost, Color,isClicked }) {
    let Indice=Number(Cant)===0?0:Number(Cost)/Number(Cant)
    let background=isClicked?"bg-gray-50":""
    return (
      <>
      <Flex className="flex-wrap hover:bg-gray-100">
        <Bold className="w-2/5 min-w-min">{Category}</Bold>
        <Text className="w-1/5 min-w-min">{Cant}</Text>
        <Text className="w-1/5 min-w-min">{Cost}</Text>
        <Badge  className="w-1/5 min-w-min" color={Color}>{Math.round(Indice*100)/100}</Badge>
      </Flex>
      </>
  );
}
