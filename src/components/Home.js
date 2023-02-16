import {Link, useParams} from "react-router-dom";
import {useFetch} from "../api/hook";
import {base_url} from "../api/const";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

function AlbumList({albums, is_show_detail}) {
    return (
        <div className="album-list">
            {albums.map((album) => (
                <div className="album-preview" key={album.id}>
                    <h2>{album.title}</h2>
                    <p>{album.artist}</p>
                    {
                        is_show_detail && (
                            <Link to={`/album/${album.id}`}>
                                <button>Detail</button>
                            </Link>
                        )
                    }
                </div>
            ))}
        </div>
    );
}

export function Registrations({users, setUsers, setCurrentUser}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repassword, setRepassword] = useState("");
    const [error, setError] = useState(null);

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
        setUsers([...users, user]);
        setCurrentUser(user);
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

export function Home({albums, setAlbums, error, isPending, currentUser, setCurrentUser, likes}) {
    return (
        <div className="home">
            {
                ! (currentUser !== null) && (
                    <>
                        <Link to={"/register"}>
                            <button>Register</button>
                        </Link>
                        <Link to={"/login"}>
                            <button>Login</button>
                        </Link>
                    </>
                )
            }
            {currentUser !== null && (
                <div className="current-user">
                    <h2>{currentUser.email}</h2>
                    <button onClick={() => setCurrentUser(null)}>Logout</button>
                </div>
            )}
            {
                currentUser !== null && (
                    <Link to={"/likes"}>
                        <button>Likes({likes.length})</button>
                    </Link>
                )
            }
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {albums && <AlbumList albums={albums} setAlbums={setAlbums} is_show_detail={currentUser !== null} />}
        </div>
    );
}

export function AlbumDetail({likes, setLikes}) {
    const {id} = useParams();
    const {data, isPending, error} = useFetch({url: base_url + "albums/" + id + "/photos"});

    const handleLike = (id_object) => {
        const newLikes = [...likes];
        const like = {id: id_object, id_album: id};
        newLikes.push(like);
        setLikes(newLikes);
    };

    return (
        <div className="album-detail">
            <Link to={"/"}>
                <button>Back</button>
            </Link>
            <h2>Album</h2>
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {data && (
                <div>
                    <div>
                        {data.map((photo) => (
                            <div className="photo-preview" key={photo.id}>
                                <img src={photo.thumbnailUrl} alt={photo.title}/>
                                <h2>{photo.title}</h2>
                                <button onClick={() => handleLike(photo.id)}>Like</button>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

function Photo({id_album, id}) {
    const {data, isPending, error} = useFetch({url: base_url + "albums/" + id_album + "/photos/"});
    if (!data) return <div>Loading...</div>;
    const photo = data.find((photo) => photo.id === id);

    return (
        <div className="photo-preview">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {photo && (
                <div>
                    <img src={photo.thumbnailUrl} alt={photo.title}/>
                    <h2>{photo.title}</h2>
                </div>
            )}
        </div>
    )
}

export function Likes({likes}) {
    function getUniqueKey() {
        return Math.random().toString(36).substr(2, 9);
    }

    return (
        <div className="likes">
            <Link to={"/"}>
                <button>Back</button>
            </Link>
            <h2>Likes</h2>
            <div>
                {likes.map((like) => (
                    <Photo id_album={like.id_album} id={like.id} key={getUniqueKey()}/>
                ))}
            </div>
        </div>
    );
}

export function Login({users, setCurrentUser}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    function check_user_in_users(user) {
        return users.find((user) => user.email === user.email && user.password === user.password);
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
