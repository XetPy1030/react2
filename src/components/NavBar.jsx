import {Link} from "react-router-dom";

export function NavBar() {
  return (
    <nav className={"navbar"}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/addbook">Add Book</Link>
        </li>
      </ul>
      <hr />
    </nav>
  )
}