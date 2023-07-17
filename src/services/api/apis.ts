import axios from "axios";
import { StrategiesDetailsParams } from "../types/types";

export const getBuildings = () =>
  axios("https://dev-q8943x225159023.api.raw-labs.com/buildings").then(
    (res) => res
  );

export const getReductionPotential = (building?: string) =>
  axios("https://dev-q8943x225159023.api.raw-labs.com/reduction", {
    params: { building },
  });

export const getSelectionSummary = () =>
  axios("https://dev-q8943x225159023.api.raw-labs.com/selection-summary");

export const getStrategiesDetails = (params: StrategiesDetailsParams) =>
  axios("https://64afc590c60b8f941af49781.mockapi.io/buildings", {
    params,
  });
