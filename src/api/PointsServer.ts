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
  static async getOwner(id: string | undefined) {
    const response = await axios.get<PointTypes>(`http://localhost:3001/points/${id}`);
    return response.data;
  }
  static async addFavorite(favorite: {id: number}) {
    const response = await axios.post<number>(`http://localhost:3001/favorites`, favorite);
    return response.data;
  }
  static async removeFavorite(favorite: number) {
    const response = await axios.delete<number>(`http://localhost:3001/favorites/${favorite}`);
    return response.data;
  }
  static async getFavorites() {
    const response = await axios.get<[]>(`http://localhost:3001/favorites`);
    return response.data;
  }
}

