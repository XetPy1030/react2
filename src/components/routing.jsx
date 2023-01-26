import React from 'react'
import {
  createBrowserRouter, Link,
  RouterProvider
} from "react-router-dom";

function Main() {
  return <h2>Main</h2>
}
function About() {
  return <h2>About</h2>
}


export function Routing() {
  return (
    <div>
      <h1>Routing</h1>
      <Link to={'/'}>Main</Link>
    </div>
  )
}