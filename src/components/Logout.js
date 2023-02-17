import {useNavigate} from "react-router-dom";

export function Logout({setCurrentUser}) {
    const navigate = useNavigate();
    setCurrentUser(null)
    navigate("/");
}