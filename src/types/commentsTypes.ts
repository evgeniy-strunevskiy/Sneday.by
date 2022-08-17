export interface ICommentTypes {
  id: number;
  email: null | string;
  content: null | string;
  name: null | string;
  date: null | string;
  login: null | string;
}

export interface ICommentsTypes {
  totalCount: null | string;
  comments: ICommentTypes[];
  isLoading: boolean;
  error: null | string;
}