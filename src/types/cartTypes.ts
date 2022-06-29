export interface ICartItemTypes {
  id: number;
  weight: number;
  price: number;
  vegetable: string;
  imgUrl: string;
  title: string;
  name: string;
}

export interface ICartTypes {
  cart: ICartItemTypes[]
  isLoading: boolean;
  error:  null | string;
}