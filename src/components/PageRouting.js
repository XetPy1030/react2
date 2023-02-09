import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {Home} from "./Home";
import {Film} from "./starwars/Film";
import {Character} from "./starwars/Character";
import {Planet} from "./starwars/Planet";
import {Starship} from "./starwars/Starship";
import {Species} from "./starwars/Spec";
import {Vehicle} from "./starwars/Vehicle";
import {Characters} from "./starwars/Characters";
import {Planets} from "./starwars/Planets";
import React from "react";
import {Starships} from "./starwars/Starships";


export const router  = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: 'films/:id',
    element: <Film />
  },
  {
    path: '/heroes',
    element: <Characters />
  },
  {
    path: '/heroes/:id',
    element: <Character />
  },
  {
    path: '/planets',
    element: <Planets />
  },
  {
    path: '/planets/:id',
    element: <Planet />
  },
  {
    path: '/starships',
    element: <Starships />
  },
  {
    path: '/starships/:id',
    element: <Starship />
  },
  {
    path: '/species/:id',
    element: <Species />
  },
  {
    path: '/vehicles/:id',
    element: <Vehicle />
  }
])
export function PageRouting () {
  return (
      <RouterProvider router={router} />
  );
}