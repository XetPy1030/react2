import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";

export function Register({users, setUsers, currentUser, setCurrentUser}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repassword, setRepassword] = useState("");
    const [errorEmail, setErrorEmail] = useState("");
    const [errorPassword, setErrorPassword] = useState("");

    const navigate = useNavigate();

    function emailInUser(email) {
        return users.find((user) => user.email === email);
    }

    function checkValidEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    function checkValidPassword(password) {
        return password.length >= 6;
    }

    function checkEmail(email) {
        if (!checkValidEmail(email)) {
            setErrorEmail("Invalid email");
            return true;
        }

        if (emailInUser(email)) {
            setErrorEmail("Email already in use");
            return true;
        }
        setErrorEmail("");
    }

    function checkPassword(password) {
        if (!checkValidPassword(password)) {
            setErrorPassword("Invalid password");
            return true;
        }

        if (password!== repassword) {
            setErrorPassword("Passwords don't match");
            return true;
        }
        setErrorPassword("");
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {email, password};

        if (checkEmail(email) || checkPassword(password)) {
            return;
        }

        setUsers([...users, user]);
        alert("User created successfully, you are now logged in");
        navigate("/login");

    }

    return (
        <div className="registrations">
            <h2>Registrations</h2>
            <form onSubmit={handleSubmit}>
                <label>Email</label>
                <input type="text" value={email} className={
                    errorEmail ? "error" : ""
                } onChange={(e) => setEmail(e.target.value)}/>
                <p>{errorEmail}</p>
                <label>Password</label>
                <input type="password" className={
                    errorPassword ? "error" : ""
                } value={password} onChange={(e) => setPassword(e.target.value)}/>
                <label>Repeat Password</label>
                <input type="password" className={
                    errorPassword ? "error" : ""
                } value={repassword} onChange={(e) => setRepassword(e.target.value)}/>
                <p>{errorPassword}</p>
                <button>Register</button>
            </form>
        </div>
    );
}

export function Login({users, currentUser, setCurrentUser}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    function check_user_in_users(user) {
        return users.find((u) => u.email === user.email && u.password === user.password);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {email, password};

        if (check_user_in_users(user)) {
            setCurrentUser(user);
            alert("Logged in successfully");
            navigate("/");
            return;
        }
        setError("Invalid email or password");
    }

    return (
        <div className="login">
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
