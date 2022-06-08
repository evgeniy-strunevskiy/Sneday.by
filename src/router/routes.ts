import { Favorites } from './../pages/Favorites';
// import { About } from "../pages/About";
import { Login } from "../pages/Login";
import { Map } from "../pages/Map";
import { NoteFound } from "../pages/NoteFound";
import { Registration } from "../pages/Registration";
import { Orders } from '../pages/Orders';
import { Products } from '../pages/Products';
import { About } from '../pages/About';
import { Owner } from '../pages/Owner';

export const privateRoutes = [
  { path: "favorites", element: Favorites },
  { path: "orders", element: Orders },
  { path: "products", element: Products },
];

export const publicRoutes = [
  { path: "index", element: Map },
  { path: ":id", element: Owner },
  { path: "login", element: Login },
  { path: "registration", element: Registration },
  { path: "about", element: About },
  { path: "*", element: NoteFound },
];