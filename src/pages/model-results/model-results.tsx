import "./model-results.css";
import { useLogic } from "./model-results.logic";
import { ReductionPotential } from "./reduction-potential/reduction-potential";
import { CalculateBoxPlotStatistics } from "utils/calculate-box-plot-chart";
import { SelectionSummary } from "./selection-summary/selection-summary";
import AllModelResults from "./all-model-results/all-model-results";

const ModelResults: React.FC = () => {
  const {
    buildings,
    isLoadingBuildings,
    setBuilding,
    reductionPotentialData,
    capitalizeFirstLetter,
    selectionSummary,
  } = useLogic();
  return (
    <div className="model-results">
      <div className="charts-card">
        <div className="left-chart">
          <ReductionPotential
            isLoadingBuildings={isLoadingBuildings}
            options={[
              { label: "All buildings", value: "All buildings" },
              ...(buildings?.data.map((item) => ({
                label: capitalizeFirstLetter(item.name),
                value: capitalizeFirstLetter(item.name),
              })) ?? []),
            ]}
            data={
              reductionPotentialData?.data[0].stratagies.map((item) => ({
                x: CalculateBoxPlotStatistics(item.x),
                y: item.name,
              })) || []
            }
            setBuilding={setBuilding}
          />
        </div>
        <div className="right-chart">
          <SelectionSummary data={selectionSummary?.data} />
        </div>
      </div>
      <div className="all-model-results-card">
        <AllModelResults />
      </div>
    </div>
  );
};

export default ModelResults;
