import { Flex, Grid } from "@tremor/react";

import { CardCantNc } from "./CardCantNc";
import { CardTratamiento } from "./CardTratamiento";

function MainContainer() {
  return (
    <div className="mainContainer w-11/12">
      <Grid numItems={1} numItemsSm={2} numItemsLg={3} className="gap-3 min-w-3/4">
        <CardCantNc className="w-2/5 h-12" />
        <CardTratamiento
          className="w-1/5 h-12"
          treatment="Reparación"
          qty="228"
          kpi="89%"
        />
        
      </Grid>
    </div>
  );
}

export default MainContainer;
