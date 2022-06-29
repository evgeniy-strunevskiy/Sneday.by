export interface IFavoriteTypes {
  id: number;
}

export interface FavoritesTypes {
  favorites: IFavoriteTypes[];
  isLoading: boolean;
  error: null | string;
}