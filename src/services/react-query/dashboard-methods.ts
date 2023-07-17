import { useQuery } from "@tanstack/react-query";
import {
  getBuildings,
  getReductionPotential,
  getSelectionSummary,
  getStrategiesDetails,
} from "../api/apis";
import {
  IBuildings,
  IReductionPotential,
  ISelectionSummary,
  IStrategiesDetails,
  StrategiesDetailsParams,
} from "../types/types";

export const dashboardMethods = () => {
  const useGetBuildings = () =>
    useQuery<IBuildings, Error>(["buildings"], getBuildings);

  const useGetReductionPotential = (building?: string) =>
    useQuery<IReductionPotential, Error>(
      ["reduction-potential", [building]],
      async () => getReductionPotential(building)
    );

  const useGetSelectionSummary = () =>
    useQuery<ISelectionSummary, Error>(
      ["selection-summary"],
      getSelectionSummary
    );

  const useGetStrategiesDetails = (params: StrategiesDetailsParams) =>
    useQuery<IStrategiesDetails, Error>(
      ["strategies-details", params],
      async () => getStrategiesDetails(params)
    );

  return {
    useGetBuildings,
    useGetReductionPotential,
    useGetSelectionSummary,
    useGetStrategiesDetails,
  };
};
