export interface ICommentTypes {
  id: number;
  email: string;
  content: string;
  name: string;
  date: string;
  imgUrl: string;
}

export interface ICommentsTypes {
  comments: ICommentTypes[];
  isLoading: boolean;
  error: null | string;
}