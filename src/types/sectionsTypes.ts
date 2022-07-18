import { IPointTypes } from "./pointsTypes";

export interface rowsTypes {
  one: IPointTypes[];
  two: IPointTypes[];
  three: IPointTypes[];
}

export interface SectionsTypes {
  //Не понимаю почему работает строка ниже, но работает
  [key: string]: any;
  rowOne: rowsTypes;
  rowTwo: rowsTypes;
}