export interface VegetableItemTypes {
  id: number;
  name: string;
}

export interface VegetablesListTypes { 
  vegetables: VegetableItemTypes[];
  isLoading: boolean;
  error: null | string;
}