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

    const handleLike = (id_object, event) => {
        const newLikes = [...likes];
        const like = {id: id_object, id_album: id};
        newLikes.push(like);
        setLikes(newLikes);
        event.target.parentElement.classList.add("liked");
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
                            <div className={"photo-preview"} key={photo.id}>
                                <img src={photo.thumbnailUrl} alt={photo.title}/>
                                <h2>{photo.title}</h2>
                                <button onClick={(event) => handleLike(photo.id, event)}>Like</button>
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

