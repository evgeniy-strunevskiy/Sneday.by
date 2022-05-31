import { VegetableItemTypes } from './../types/vegetablesListTypes';
import { PointTypes } from './../types/pointsTypes';
import axios from "axios";

export class PointsServer {
  static async getAll() {
    const response = await axios.get<PointTypes[]>("http://localhost:3001/points");
    return response.data;
  }
  static async getVegetables() {
    const response = await axios.get<VegetableItemTypes[]>("http://localhost:3001/vegetables");
    return response.data;
  }
}

