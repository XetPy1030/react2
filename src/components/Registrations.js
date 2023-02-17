import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";

export function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repassword, setRepassword] = useState("");
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    function emailInUser(email) {
        return window.users.find((user) => user.email === email);
    }

    function checkValidEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    function checkValidPassword(password) {
        return password.length >= 6;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {email, password};

        if (!checkValidEmail(email)) {
            setError("Invalid email");
            return;
        }

        if (!checkValidPassword(password)) {
            setError("Invalid password");
            return;
        }

        if (password!== repassword) {
            setError("Passwords don't match");
            return;
        }

        if (emailInUser(email)) {
            setError("Email already in use");
            return;
        }
        window.store.users = [...window.store.users, user];
        window.store.currentUser = user;
        alert("User created and logged in");
        navigate("/");

    }

    return (
        <div className="registrations">
            <Link to={"/login"}>
                <button>Login</button>
            </Link>
            <Link to={"/"}
            >
                <button>Back</button>
            </Link>
            <h2>Registrations</h2>
            <form onSubmit={handleSubmit}>
                <label>Email</label>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <label>Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <label>Repeat Password</label>
                <input type="password" value={repassword} onChange={(e) => setRepassword(e.target.value)}/>
                <button>Register</button>
            </form>
            {error && <div>{error}</div>}
        </div>
    );
}

export function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    function check_user_in_users(user) {
        return window.users.find((u) => u.email === user.email && u.password === user.password);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {email, password};

        if (check_user_in_users(user)) {
            window.store.currentUser = user;
            alert("Logged in successfully");
            navigate("/");
            return;
        }
        setError("Invalid email or password");
    }

    return (
        <div className="login">
            <Link to={"/register"}>
                <button>Register</button>
            </Link>
            <Link to={"/"}>
                <button>Back</button>
            </Link>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <label>Email</label>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <label>Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <button>Login</button>
            </form>
            {error && <div>{error}</div>}
        </div>
    )
}
