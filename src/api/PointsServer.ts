import { VegetableItemTypes } from './../types/vegetablesListTypes';
import { PointTypes } from './../types/pointsTypes';
import axios from "axios";

export class PointsServer {
  static async getAll() {
    const response = await axios.get<PointTypes[]>("http://localhost:3001/points");
    console.log(response.data)
    return response.data;
  }
  static async getVegetables() {
    const response = await axios.get<VegetableItemTypes[]>("http://localhost:3001/vegetables");
    return response.data;
  }
  static async getOwner(id: string | undefined) {
    const response = await axios.get<PointTypes>(`http://localhost:3001/points/${id}`);
    return response.data;
  }
}

