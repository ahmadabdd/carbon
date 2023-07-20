export interface ReductionPotentialProps {
  isLoadingBuildings: boolean;
  options: Option[];
  setBuilding: (str: string) => void;
  data: any[];
}

type Option = {
  label: string;
  value: string;
};
