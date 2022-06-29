export interface IOrderTypes {
  
}

export interface IOrdersTypes {
  order: IOrderTypes[],
  isLoading: boolean,
  error: null | string,
}