export interface IFavoriteTypes {
  id: number;
}

export interface IFavoritesTypes {
  favorites: IFavoriteTypes[];
  isLoading: boolean;
  error: null | string;
}