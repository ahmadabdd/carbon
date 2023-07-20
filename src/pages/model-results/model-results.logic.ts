import { useEffect, useState } from "react";
import {
  useGetBuildings,
  useGetReductionPotential,
  useGetSelectionSummary,
} from "services/react-query/dashboard-methods";

export const useLogic = () => {
  const [building, setBuilding] = useState<string>();
  const { data: buildings, isLoading: isLoadingBuildings } = useGetBuildings();
  const {
    data: reductionPotentialData,
    isLoading: isLoadingReductionPotential,
  } = useGetReductionPotential(
    building !== "All buildings" ? building : undefined
  );
  const { data: selectionSummary, isLoading: isLoadingSelectionSummary } =
    useGetSelectionSummary();

  const capitalizeFirstLetter = (str: string) =>
    str.charAt(0).toUpperCase() + str.slice(1);

  useEffect(() => {
    console.log(selectionSummary?.data?.currentEmissions);
  }, [selectionSummary]);

  return {
    buildings,
    isLoadingBuildings,
    reductionPotentialData,
    isLoadingReductionPotential,
    setBuilding,
    capitalizeFirstLetter,
    selectionSummary,
    isLoadingSelectionSummary,
  };
};
