import { Favorites } from './../pages/Favorites';
import { Login } from "../pages/Login";
import { Map } from "../pages/Map";
import { NoteFound } from "../pages/NoteFound";
import { Orders } from '../pages/Orders';
import { Owner } from '../pages/Owner';
import { Cart } from '../pages/Cart';
import { Comments } from '../pages/Comments';

export const privateRoutes = [
  { path: "favorites", element: Favorites },
  { path: "orders", element: Orders },
  { path: "cart", element: Cart },
  { path: "comments", element: Comments },
];

export const publicRoutes = [
  { path: "index", element: Map },
  { path: ":id", element: Owner },
  { path: "login", element: Login },
  { path: "*", element: NoteFound },
];