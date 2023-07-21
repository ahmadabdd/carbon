// StrategiesDetails
export interface StrategiesDetailsParams {
  page?: number;
  limit?: number;
  sortBy?: string;
  order?: "asc" | "desc";
}

export interface IStrategiesDetails {
  data: IStrategiesDetail[];
}

export interface IStrategiesDetail {
  createdAt: string;
  name: string;
  id: string;
  stratagy: Strategy[];
}

export interface Strategy {
  key: string;
  createdAt: string;
  name: string;
  emissions_reduction_tco2e: number;
  emissions_reduction_portfolio_percent: number;
  project_cost: number;
  id: string;
  buildingId: string;
  strategyName: string;
  buildingName: string;
}

// Buildings
export interface IBuildings {
  data: Building[];
}

interface Building {
  id: string;
  name: string;
}

// ReductionPotential
export interface IReductionPotential {
  data: ReductionPotential[];
}

interface ReductionPotential {
  buildingId: string;
  building: Building;
  stratagies: BuildingStrategy[];
}

interface BuildingStrategy {
  name: string;
  x: number[];
}

// selectionSummary
export interface ISelectionSummary {
  data?: EmissionsData;
}

export interface EmissionsData {
  currentEmissions: number;
  withAllStrategies: StrategyEstimates;
}

interface StrategyEstimates {
  lowEstimate: number;
  median: number;
  highEstimate: number;
}
