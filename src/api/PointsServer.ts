import { ICartItemTypes } from './../types/cartTypes';
import { IVegetableItemTypes } from './../types/vegetablesListTypes';
import { IPointTypes } from './../types/pointsTypes';
import axios from "axios";
import { IFavoriteTypes } from '../types/favoritesTypes';

export class PointsServer {
  static async getAll() {
    const response = await axios.get<IPointTypes[]>("http://localhost:3001/points");
    return response.data;
  }
  static async getVegetables() {
    const response = await axios.get<IVegetableItemTypes[]>("http://localhost:3001/vegetables");
    return response.data;
  }
  static async getOwner(id: string | undefined) {
    const response = await axios.get<IPointTypes>(`http://localhost:3001/points/${id}`);
    return response.data;
  }
  static async addFavorite(favorite: IFavoriteTypes) {
    const response = await axios.post<number>(`http://localhost:3001/favorites`, favorite);
    return response.data;
  }
  static async removeFavorite(favorite: number) {
    const response = await axios.delete<number>(`http://localhost:3001/favorites/${favorite}`);
    return response.data;
  }
  static async getFavorites() {
    const response = await axios.get<IFavoriteTypes[]>(`http://localhost:3001/favorites`);
    return response.data;
  }
  static async getCart() {
    const response = await axios.get<ICartItemTypes[]>(`http://localhost:3001/cart`);
    return response.data;
  }
  static async addToCart(cartItem: ICartItemTypes) {
    const response = await axios.post<ICartItemTypes>(`http://localhost:3001/cart`, cartItem);
    return response.data;
  }
  static async removeFromCart(cartItem: number) {
    const response = await axios.delete<number>(`http://localhost:3001/cart/${cartItem}`);
    return response.data;
  }
}

