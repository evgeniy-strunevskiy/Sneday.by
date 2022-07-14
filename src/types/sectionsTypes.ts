import { PointTypes } from "./pointsTypes";

export interface rowsTypes {
  one: PointTypes[];
  two: PointTypes[];
  three: PointTypes[];
}

export interface SectionsTypes {
  //Не понимаю почему работает строка ниже, но работает
  [key: string]: any;
  rowOne: rowsTypes;
  rowTwo: rowsTypes;
}