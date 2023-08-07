import { Bold, Text, Title, Flex, Badge } from "@tremor/react";

export function ItemCategory({ Category, Cant, Cost, Color }) {
    let Indice=Number(Cant)===0?0:Number(Cost)/Number(Cant)

    return (

      <Flex className="flex-wrap" >
        <Bold className="w-2/5 min-w-min">{Category}</Bold>
        <Text className="w-1/5 min-w-min">{Cant}</Text>
        <Text className="w-1/5 min-w-min">{Cost}</Text>
        <Badge  className="w-1/5 min-w-min" color={Color}>{Math.round(Indice*100)/100}</Badge>
      </Flex>

  );
}
