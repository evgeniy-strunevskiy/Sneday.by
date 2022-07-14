export interface VegetablesTypes {
  id: number;
  title: any;
  vegetable: string;
  name: string;
  isFavorite: boolean
  price: number;
  imgUrl: string;
}

export interface PointTypes {
  id: number;
  name: string;
  owner: string;
  tel: number;
  logoUrl: string;
  isBusy: boolean;
  vegetables: VegetablesTypes[]
}

export interface PointsTypes { 
  points: PointTypes[];
  isLoading: boolean;
  error: null | string;
}
