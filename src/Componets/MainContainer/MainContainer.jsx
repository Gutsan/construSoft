import { Flex } from "@tremor/react";

import { CardCantNc } from "./CardCantNc";
import { CardTratamiento } from "./CardTratamiento";

function MainContainer() {
  return (
    <div className="mainContainer w-11/12">
      <Flex className="gap-3 min-w-3/4">
        <CardCantNc className="w-2/5 h-12" />
        <CardTratamiento
          className="w-1/5 h-12"
          treatment="Reparación"
          qty="228"
          kpi="89%"
        />
        <CardTratamiento
          className="w-1/5 h-12"
          treatment="Eliminación"
          qty="2"
          kpi="1%"
        />
        <CardTratamiento
          className="w-1/5 h-12"
          treatment="Bajo Concesión"
          qty="25"
          kpi="10%"
        />
      </Flex>
    </div>
  );
}

export default MainContainer;
