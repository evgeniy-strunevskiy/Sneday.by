export interface IVegetablesTypes {
  id: number;
  title: any;
  vegetable: string;
  name: string;
  isFavorite: boolean
  price: number;
  imgUrl: string;
}

export interface IPointTypes {
  id: number;
  name: string;
  owner: string;
  tel: number;
  logoUrl: string;
  isBusy: boolean;
  vegetables: IVegetablesTypes[]
}

export interface IPointsTypes { 
  points: IPointTypes[];
  isLoading: boolean;
  error: null | string;
}
