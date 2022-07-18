export interface IVegetableItemTypes {
  id: number;
  name: string;
}

export interface IVegetablesListTypes { 
  vegetables: IVegetableItemTypes[];
  isLoading: boolean;
  error: null | string;
}