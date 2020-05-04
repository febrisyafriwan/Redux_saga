import Loadable from "react-loadable";
import Loading from "../../component/loading/Loading";

const ProductionBonus = Loadable({
  loader: () => import("./ProductionBonus"),
  loading: Loading
});

const RoutesProductionBonus = [
  {
    path: "/react/layout/production_bonus/:agentNumber",
    name: "production_bonus",
    component: ProductionBonus
  }
];

export default RoutesProductionBonus;
