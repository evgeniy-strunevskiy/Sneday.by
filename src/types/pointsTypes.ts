export interface VegetablesTypes {
  title: any;
  vegetable: string;
  name: string;
  price: number;
  imgUrl: string;
}

export interface PointTypes {
  id: number;
  name: string;
  owner: string;
  isBusy: boolean;
  vegetables: VegetablesTypes[]
}

export interface PointsTypes { 
  points: PointTypes[];
  isLoading: boolean;
  error: null | string;
}
