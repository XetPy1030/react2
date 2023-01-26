import {Link} from "react-router-dom";
import {UserMenu} from "./components/UserMenu";

export function NavBar(props) {
  return (
    <nav className={"navbar"}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {props.currentUser ? (
          <>
            <li>
              <Link to="/cart">Cart({props?.cart?.length})</Link>
            </li>
            <li>
              <Link to="/orders">Orders({props?.orders?.length})</Link>
            </li>
          </>
        ) : null
        }
        <li>
          <UserMenu {...props} />
        </li>
      </ul>
      <hr />
    </nav>
  );
}