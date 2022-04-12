import { Favorites } from './../pages/Favorites';
import { About } from "../pages/About";
import { Login } from "../pages/Login";
import { Map } from "../pages/Map";
import { NoteFound } from "../pages/NoteFound";
import { Registration } from "../pages/Registration";
import { Orders } from '../pages/Orders';
import { Products } from '../pages/Products';
import { Main } from '../components/Main';

export const privateRoutes = [
  { path: "index", element: Main },
  { path: "favorites", element: Favorites },
  { path: "orders", element: Orders },
  { path: "products", element: Products },
];

export const publicRoutes = [
  { path: "index", element: Main },
  { path: "login", element: Login },
  { path: "registration", element: Registration },
  { path: "map", element: Map },
  { path: "about", element: About },
  { path: "*", element: NoteFound },
];